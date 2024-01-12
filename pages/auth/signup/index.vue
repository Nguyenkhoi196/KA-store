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
        class="container p-8 bg-white text-primary rounded-xl max-w-[500px] backdrop-opacity-50 backdrop-blur-3xl bg-[url(https://i.pinimg.com/564x/78/21/93/782193d5caab6629183924c9fc1beacf.jpg)] bg-center bottom-0 bg-cover shadow-2xl shadow-white-300">
        <div class="grid gap-5 pb-10">
          <div class="text-center">
            <span
              class="text-4xl font-bold bg-clip-text text-transparent bg-[url(https://i.pinimg.com/564x/d9/55/b3/d955b35830e6af077dbbe09087e316fa.jpg)] bg-cover bg-center">Đăng
              Ký</span>
          </div>
        </div>
        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <div class="relative">
            <input id="usernameInput" v-model="form.username" autocomplete="off" type="text" class="form-input peer"
              placeholder="Tài khoản" />
            <label for="usernameInput" class="form-label text-current">Tài khoản
            </label>
          </div>
          <!-- Email input -->
          <div class="relative">
            <input id="emailInput" v-model="form.email" autocomplete="off" type="email" class="form-input peer"
              placeholder="Email" />
            <label for="emailInput" class="form-label text-current">Email
            </label>
          </div>
          <!--Password input-->
          <div class="relative">
            <input id="passwordInput" v-model="form.password" autocomplete="off" type="password" class="form-input peer"
              placeholder="Mật khẩu" />
            <label for="passwordInput" class="form-label text-current">Mật khẩu</label>
          </div>

          <!--Submit button-->
          <div class="text-center">
            <button class="form-button bg-secondary/20 text-current hover:bg-secondary/50" type="submit">
              Đăng ký
            </button>
          </div>
        </form>
        <!-- Start-err -->
        <div v-if="error" class="text-left text-yellow mt-4">
          <div class="bg-red-200/75 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
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
    <alert-pop-up :alert="alert" />
  </div>
</template>

<script lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { store } from '../../../store'
import type { FormAuth } from '~/types/Form'
import Alert from '~/components/global/Alerts/Alert'
export default {
  layout: 'DefaultLayout',
}
</script>
<script lang="ts" setup>
const form = reactive<FormAuth<string | null>>({
  email: null,
  username: null,
  password: null,
})

const error = ref<any>()

watch(form, () => {
  error.value = ''
})
const alert = reactive<Alert>({
  message: undefined,
  type: undefined,
  show: false,
  timeout: 10000,
})
const onSubmit = async () => {
  try {
    const { user } = await store.dispatch('signup', form)
    if (user) {
      alert.message = `Đã gửi một email xác nhận đến địa chỉ bạn ${user.email}. Vui lòng kiểm tra hộp thư đến và nhấp vào liên kết để kích hoạt tài khoản.`
      alert.type = 'success'
      alert.show = true
    }
  } catch (e: any) {
    error.value = e
  }
}
</script>

<style lang="scss" scoped></style>
