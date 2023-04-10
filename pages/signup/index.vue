<template>
  <div class="flex flex-col items-center justify-between h-full gap-10" >
    <DefaultLayout />
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
              class="px-4 py-3 rounded-lg border border-gray-900 bg-gray-400/10 text-black mt-1"
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
              class="px-4 py-3 rounded-lg border border-gray-900 bg-gray-400/10 text-black mt-1"
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
              class="px-4 py-3 rounded-lg border border-gray-900 bg-gray-400/10 text-black mt-1"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div class="row">
          <button
          v-if="!isPending"
            type="submit"
            class="font-semibold w-full px-4 py-3 rounded-lg border border-gray-900 text-yellow bg-white mt-1 text-center hover:bg-slate-500"
          >
            Sign Up
          </button>
          <button
            v-else
            type="button"
            class="cursor-not-allowed font-semibold w-full px-4 py-3 rounded-lg border border-gray-900 text-yellow bg-gray-300 mt-1 text-center"
            disabled>
          Loading...
          </button>
        </div>
      </form>
      <!-- Start-err -->
      <div v-if="error" class="text-left text-yellow mt-4">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Holy smokes!</strong>
          <span class="block sm:inline">Something seriously bad happened.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
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
import { ref, watch } from 'vue';
import { useRouter } from '@nuxtjs/composition-api';
import { store } from "../../store";
import DefaultLayout from '~/layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  },
  transition: 'slide-right',
  meta: {
    requireAuth: true
  },
  setup() {
    const fullName = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const isPending = ref<boolean>(false);
    const error = ref<any>('');
    const router = useRouter();
    watch([email, password],() => {
      error.value = ''
    })


    const onSubmit = async()=> {
      try {
        await store.dispatch('signup', {
          fullName: fullName.value,
          email: email.value,
          password: password.value,
        });
      } catch (e: any) {
        error.value = e.message;

      }
      if (!error.value) {
        console.log('signup success !');
        router.push("/login");
      }
    };

  return {
    fullName,
    email,
    password,
    error,
    onSubmit,
    isPending,
    }
  }
}
</script>

<style scoped>
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform .2s ease-in-out;
}

.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100%);
}
</style>
