<template>
  <div>
    <div
      class="flex flex-row items-center justify-between h-screen gap-10 pt-20 px-40"
    >
      <div class="container mx-auto px-8">
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
            <label for="usernameInput" class="form-label">Tài khoản </label>
          </div>
          <!-- Email input -->
          <div class="relative">
            <input
              id="emailInput"
              v-model="email"
              autocomplete="off"
              type="text"
              class="form-input peer"
              placeholder="Email"
            />
            <label for="emailInput" class="form-label">Email </label>
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
            <label for="passwordInput" class="form-label">Mật khẩu</label>
          </div>

          <!--Submit button-->
          <div class="text-center">
            <button class="form-button" type="submit">Đăng ký</button>
          </div>
        </form>
        <!-- Start-err -->
        <div v-if="error" class="text-left text-yellow mt-4">
          <div
            class="bg-red-200/75 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Error !</strong>
            <span class="block sm:inline">{{ error }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
          </div>
        </div>
        <div class="w-full text-center mt-6">
          <span class="font-semibold"> Bạn đã có tài khoản ? </span>
          <span class="ml-1 font-extrabold">
            <nuxt-link to="/login">Đăng nhập</nuxt-link>
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
  transition: 'slide-right',
  meta: {
    requireAuth: true,
  },
  setup() {
    const username = ref<string>()
    const email = ref<string>()
    const password = ref<string>()
    const isPending = ref<boolean>(false)
    const error = ref<string>()
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
        error.value = e.message
      }
      if (!error.value) {
        router.push('/login')
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
