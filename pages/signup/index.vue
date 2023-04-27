<template>
  <div class="flex flex-col items-center justify-between h-full gap-10">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col space-y-6 justify-start"
        @submit.prevent="onSubmit"
      >
        <div class="row relative">
          <label class="form-label" for="fullName">
            <!-- flex flex-col font-semibold translate-y-10 transform active:translate-y-0 transition-transform -->
            Tên đăng nhập
          </label>
          <input v-model="fullName" class="form-input" type="text" />
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input v-model="email" class="form-input" type="email" />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Mật khẩu</span>
            <input v-model="password" class="form-input" type="password" />
          </label>
        </div>
        <div class="row">
          <button v-if="!isPending" type="submit" class="form-button">
            Đăng ký
          </button>
          <button
            v-else
            type="button"
            class="cursor-not-allowed font-semibold w-full px-4 py-3 rounded-lg border-[1px] ring-2 ring-secondary hover:border-tertiary text-black bg-secondary mt-1 text-center"
            disabled
          >
            Loading...
          </button>
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
      <!-- Star--direction -->

      <div class="w-full text-center mt-6">
        <span class="font-semibold">Bạn đã có tài khoản ?</span>
        <span class="ml-1 font-extrabold">
          <nuxt-link to="/login">Đăng nhập</nuxt-link>
        </span>
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

.form-input {
  @apply px-4 py-3 rounded-lg text-black mt-1  shadow-[1px_0px_6px_rgba(0,0,0,0.25)] bg-transparent z-40 w-full
  focus:shadow-[inset_2px_0px_6px_rgba(0,0,0,0.25)] focus:outline-none;
}

.form-label {
  @apply flex left-4 top-2/3 px-2 text-tertiary cursor-text transition-all duration-200 ease-in bg-primary;
  &::before {
    @apply absolute left-0 -top-3 text-white text-xs transition-all duration-200 ease-in;
  }
}

// .form-input:focus ~ .form-label,
// .form-input:not(:placeholder-shown):not(:focus) ~ .form-label {
//   @apply top-1/4 text-xs left-4;
//   &::before {
//     @apply -top-3 text-xs left-0;
//   }
// }

.form-button {
  @apply px-4 py-3 rounded-lg  text-black mt-1 shadow-[1px_0px_6px_rgba(0,0,0,0.25)] font-semibold w-full bg-opacity-70 text-center
  active:shadow-[inset_2px_0px_6px_rgba(0,0,0,0.25)];
}
</style>
