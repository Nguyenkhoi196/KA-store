<template>
  <div class="flex flex-col items-center justify-between h-full gap-10">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col space-y-6 justify-start"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">fullName</span>
            <input
              v-model="fullName"
              class="px-4 py-3 rounded-lg border-[1px] ring-2 ring-secondary border-tertiary bg-gray-400/10 text-black mt-1"
              type="text"
              placeholder="KhoiNguyen"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              v-model="email"
              class="px-4 py-3 rounded-lg border-[1px] ring-2 ring-secondary border-tertiary bg-gray-400/10 text-black mt-1"
              type="email"
              placeholder="@gmail.com"
              autocomplete="username"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              v-model="password"
              class="px-4 py-3 rounded-lg border-[1px] ring-2 ring-secondary border-tertiary bg-gray-400/10 text-black mt-1"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="font-semibold w-full px-4 py-3 rounded-lg border-[1px] ring-2 ring-secondary hover:border-tertiary text-black bg-secondary mt-1 text-center"
          >
            Sign Up
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
          class="bg-red-200/75 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Error !</strong>
          <span class="block sm:inline">{{ error }}</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
           
          </span>
        </div>
      </div>
      <!-- Star--direction -->

      <div class="w-full text-center mt-6">
        <span class="font-semibold"> I'm ready a member. </span>
        <span class="ml-1 font-extrabold">
          <nuxt-link to="/login">LogIn</nuxt-link>
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
</style>
