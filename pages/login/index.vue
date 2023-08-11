<template>
  <div>
    <div
      class="flex flex-row items-center justify-between gap-10 px-40 py-20 bg-gradient-to-br from-teal-50 via-slate-50 to-green-50 to-50% via-40% from-10%"
    >
      <div>A</div>

      <div
        class="container p-8 bg-white rounded-xl max-w-[500px] backdrop-opacity-50 backdrop-blur-3xl bg-[url(https://i.pinimg.com/564x/f2/d4/7e/f2d47e97a1ab80a9843f7b96f984bb21.jpg)] bg-center bg-cover shadow-2xl shadow-white-300"
      >
        <!-- ở đây -->
        <div class="grid gap-5 pb-10">
          <div class="text-center">
            <span
              class="text-4xl font-bold bg-clip-text text-transparent bg-[url(https://i.pinimg.com/564x/d9/55/b3/d955b35830e6af077dbbe09087e316fa.jpg)] bg-cover"
              >Đăng Nhập</span
            >
          </div>
        </div>
        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <div class="relative">
            <input
              id="emailInput"
              v-model="email"
              autocomplete="off"
              type="email"
              class="form-input peer"
              placeholder="Email"
            />
            <label for="emailInput" class="form-label">Email </label>
          </div>
          <div class="relative">
            <input
              id="passwordInput"
              v-model="password"
              autocomplete="off"
              type="password"
              class="form-input peer"
              placeholder="Mật khẩu"
            />
            <label for="passwordInput" class="form-label">Mật khẩu </label>
          </div>
          <div class="flex flex-col gap-4 text-center">
            <button
              class="form-button bg-secondary/20 text-current hover:bg-secondary/50"
              type="submit"
            >
              Đăng nhập
            </button>

            <!--Forgot password link-->
            <a href="#!">
              <span class="text-current/50 hover:text-current">
                Quên mật khẩu?
              </span></a
            >
          </div>
        </form>
        <!-- Start-err -->
        <div v-if="error" class="text-left text-yellow mt-4">
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">{{ error?.status }} !</strong>
            <span class="block sm:inline">{{ error?.message }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
          </div>
        </div>
        <!-- Star--direction -->

        <div class="w-full text-center mt-6 text-current/50">
          <span class="font-semibold"> Bạn chưa có tài khoản ? </span>
          <span class="ml-1 font-extrabold hover:text-current">
            <nuxt-link to="/signup">Đăng ký</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { store } from '../../store'

export default {
  layout: 'DefaultLayout',
  transition: 'slide-left',
}
</script>
<script lang="ts" setup>
const email = ref(null)
const password = ref(null)
const error = ref('')
const router = useRouter()

watch([email, password], () => {
  error.value = ''
})

const onSubmit = async () => {
  try {
    await store
      .dispatch('login', {
        identifier: email.value,
        password: password.value,
      })
      .then(() => {
        const role = store.state.users.user.role
        console.log(role)
        if (role === 'Admin') {
          console.log('admin')

          router.push('/market')
        } else {
          console.log('auth')

          router.push('/profile')
        }
      })
  } catch (e: any) {
    error.value = e
  }
}
</script>
<style lang="scss" scoped></style>
