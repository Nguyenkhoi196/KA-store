<template>
  <div class=" bg-gradient-to-br from-teal-50 via-slate-50 to-green-50 to-50% via-40% from-10%">
    <div class="container flex flex-row items-center justify-between gap-10 px-20 py-10 ">
      <div class="max-w-2xl">
        <h3 class="text-4xl font-bold mb-3 text-secondary tracking-wide">
          Uy tín, Tận tâm
          <br />
          Chất lượng, Chuyên nghiệp
        </h3>
        <hr />
        <h2 class="text-2xl font-semibold text-gray-800 mt-3">
          Đồng hành cùng Khởi Anh để xây dựng những ngôi nhà đi theo cùng năm
          tháng
        </h2>
      </div>

      <div
        class="container p-8 bg-white rounded-xl max-w-[500px] backdrop-opacity-50 backdrop-blur-3xl bg-[url(https://i.pinimg.com/564x/f2/d4/7e/f2d47e97a1ab80a9843f7b96f984bb21.jpg)] bg-center bg-cover shadow-2xl shadow-white-300">
        <!-- ở đây -->
        <div class="grid gap-5 pb-10">
          <div class="text-center">
            <span
              class="text-4xl font-bold bg-clip-text text-transparent bg-[url(https://i.pinimg.com/564x/d9/55/b3/d955b35830e6af077dbbe09087e316fa.jpg)] bg-cover">Đăng
              Nhập</span>
          </div>
        </div>
        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <div class="relative">
            <input id="emailInput" v-model="form.email" autocomplete="off" type="email" class="form-input peer"
              placeholder="Email" />
            <label for="emailInput" class="form-label">Email </label>
          </div>
          <div class="relative">
            <input id="passwordInput" v-model="form.password" autocomplete="off" type="password" class="form-input peer"
              placeholder="Mật khẩu" />
            <label for="passwordInput" class="form-label">Mật khẩu </label>
          </div>
          <div class="flex flex-col gap-4 text-center">
            <button class="form-button bg-secondary/20 text-current hover:bg-secondary/50" type="submit">
              Đăng nhập
            </button>

            <!--Forgot password link-->
            <a href="#!">
              <span class="text-current/50 hover:text-current">
                Quên mật khẩu?
              </span></a>
          </div>
        </form>
        <!-- Start-err -->
        <div v-if="error" class="text-left text-yellow mt-4">
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">{{ error?.status }} !</strong>
            <span class="block sm:inline">{{ error?.message }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
          </div>
        </div>
        <!-- Star--direction -->

        <div class="w-full text-center mt-6 text-current/50">
          <span class="font-semibold"> Bạn chưa có tài khoản ? </span>
          <span class="ml-1 font-extrabold hover:text-current">
            <nuxt-link to="/auth/signup">Đăng ký</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { store } from '../../../store'
import type { FormAuth } from '~/types/Form'

export default {
  layout: 'DefaultLayout',
}
</script>
<script lang="ts" setup>
const error = ref()
const router = useRouter()

const form = reactive<FormAuth<string | null>>({
  email: null,
  password: null,
})
watch(form, () => {
  error.value = null
})

const onSubmit = async () => {
  try {
    await store
      .dispatch('login', {
        identifier: form.email,
        password: form.password,
      })
      .then(() => {
        const role = store.state.users.user.role
        if (role === 'Admin') {
          router.push('/manage/market')
        } else {
          router.push('/profile')
        }
      })
  } catch (e: any) {
    error.value = e
  }
}
</script>
<style lang="scss" scoped></style>
