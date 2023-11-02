<template>
  <div>
    <div
      class="flex flex-row items-center justify-between gap-10 px-40 py-20 bg-gradient-to-br from-teal-50 via-slate-50 to-green-50 to-50% via-40% from-10%"
    >
      <div></div>

      <div
        class="container p-8 bg-white text-primary rounded-xl max-w-[500px] backdrop-opacity-50 backdrop-blur-3xl bg-[url(https://i.pinimg.com/564x/78/21/93/782193d5caab6629183924c9fc1beacf.jpg)] bg-center bottom-0 bg-cover shadow-2xl shadow-white-300"
      >
        <div class="grid gap-5 pb-10">
          <div class="text-center">
            <span
              class="text-4xl font-bold bg-clip-text text-transparent bg-[url(https://i.pinimg.com/564x/d9/55/b3/d955b35830e6af077dbbe09087e316fa.jpg)] bg-cover bg-center"
              >Đăng Ký</span
            >
          </div>
        </div>
        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <div class="relative">
            <input
              id="usernameInput"
              v-model="username"
              autocomplete="off"
              type="text"
              class="form-input peer"
              placeholder="Tài khoản"
            />
            <label for="usernameInput" class="form-label text-current"
              >Tài khoản
            </label>
          </div>
          <!-- Email input -->
          <div class="relative">
            <input
              id="emailInput"
              v-model="email"
              autocomplete="off"
              type="email"
              class="form-input peer"
              placeholder="Email"
            />
            <label for="emailInput" class="form-label text-current"
              >Email
            </label>
          </div>
          <!--Password input-->
          <div class="relative">
            <input
              id="passwordInput"
              v-model="password"
              autocomplete="off"
              type="password"
              class="form-input peer"
              placeholder="Mật khẩu"
            />
            <label for="passwordInput" class="form-label text-current"
              >Mật khẩu</label
            >
          </div>

          <!--Submit button-->
          <div class="text-center">
            <button
              class="form-button bg-secondary/20 text-current hover:bg-secondary/50"
              type="submit"
            >
              Đăng ký
            </button>
          </div>
        </form>
        <!-- Start-err -->
        <div v-if="error" class="text-left text-yellow mt-4">
          <div
            class="bg-red-200/75 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">{{ error?.status }} !</strong>
            <span class="block sm:inline">{{ error?.message }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
          </div>
        </div>
        <div class="w-full text-center mt-6">
          <span class="font-semibold"> Bạn đã có tài khoản ? </span>
          <span class="ml-1 font-extrabold">
            <nuxt-link to="/auth/login">Đăng nhập</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { store } from '../../../store'
export default {
  layout: 'DefaultLayout',
  transition: 'slide-right',
  meta: {
    requireAuth: true,
  },
  setup() {
    const username = ref<string>()
    const email = ref<string>()
    const password = ref<string>()
    const isPending = ref<boolean>(false)
    const error = ref<any>()
    const router = useRouter()

    watch([email, password], () => {
      error.value = ''
    })

    const onSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          username: username.value,
          password: password.value,
        })
      } catch (e: any) {
        error.value = e
      }
      if (!error.value) {
        router.push('/auth/login')
      }
    }

    return {
      username,
      email,
      password,
      error,
      onSubmit,
      isPending,
    }
  },
}
</script>

<style lang="scss" scoped></style>
