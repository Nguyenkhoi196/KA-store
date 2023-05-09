<template>
  <div class="flex flex-col items-center justify-between h-full gap-10">
    <div class="container mx-auto px-8">
      <!-- <form
        class="flex flex-col space-y-6 justify-start"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="name">
            <span class="font-semibold"> Tên đăng nhập </span>
            <input v-model="fullName" class="form-input peer" type="text" />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input v-model="email" class="form-input peer" type="email" />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Mật khẩu</span>
            <input v-model="password" class="form-input peer" type="password" />
          </label>
        </div>
        <div class="row">
          <button v-if="!isPending" type="submit" class="form-button w-full">
            Đăng ký
          </button>
          <button
            v-else
            type="button"
            class="cursor-not-allowed form-button"
            disabled
          >
            Loading...
          </button>
        </div>
      </form> -->
      <form>
        <p class="mb-4">Please login to your account</p>
        <!--Username input-->
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="usernameInput"
            v-model="username"
            type="text"
            class="form-input peer"
            placeholder="Tài khảo"
          />
          <label for="usernameInput" class="form-label">Tài khoản </label>
        </div>
        <!-- Email input -->
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="emailInput"
            v-model="email"
            type="text"
            class="form-input peer"
            placeholder="Email"
          />
          <label for="emailInput" class="form-label pointer-events-none"
            >Email
          </label>
        </div>

        <!--Password input-->
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="passwordInput"
            v-model="password"
            type="password"
            class="form-input peer"
            placeholder="Mật khẩu"
          />
          <label for="passwordInput" class="form-label">Mật khẩu </label>
        </div>

        <!--Submit button-->
        <div class="mb-12 pb-1 pt-1 text-center">
          <button
            class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Log in
          </button>

          <!--Forgot password link-->
          <a href="#!">Quên mật khẩu?</a>
        </div>

        <!--Register button-->
        <div class="flex items-center justify-between pb-6">
          <p class="mb-0 mr-2">Bạn đã có tài khoản?</p>

          <nuxt-link to="/login">Đăng nhập</nuxt-link>
        </div>
      </form>
      <!-- Start-err -->
      <div v-if="error" class="text-left text-yellow mt-4">
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Error</strong>
          <span class="block sm:inline">{{ error }}</span>
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
    const fullName = ref<any>(null)
    const email = ref<any>(null)
    const password = ref<any>(null)
    const isPending = ref<boolean>(false)
    const error = ref<any>('')
    const router = useRouter()
    watch([email, password], () => {
      error.value = ''
    })

    const onSubmit = async () => {
      try {
        await store.dispatch('signup', {
          fullName: fullName.value,
          email: email.value,
          password: password.value,
        })
        console.log(fullName.value)
      } catch (e: any) {
        error.value = e.message
      }
      if (!error.value) {
        console.log('signup success !')
        router.push('/login')
      }
    }

    return {
      fullName,
      email,
      password,
      error,
      onSubmit,
      isPending,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/pageTransition';
@import '../../assets/scss/components/form';
</style>
