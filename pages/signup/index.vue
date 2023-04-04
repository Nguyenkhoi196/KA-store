<template>
  <div class="mt-8" >
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col space-y-6 justify-start"
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
              type="text"
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
              type="text"
              placeholder="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="font-semibold w-full px-4 py-3 rounded-lg border border-gray-900 text-yellow bg-white mt-1 text-center hover:bg-yellow hover:text-white"
            @submit.prevent="onSubmit"
          >
            Sign Up
          </button>
          <button
            v-else
            type="button"
            class="cursor-not-allowed font-semibold w-full px-4 py-3 rounded-lg border border-gray-900 text-yellow bg-gray-300 mt-1 text-center hover:bg-yellow hover:text-white"
            disabled>
          Loading...
          </button>
        </div>
      </form>
      <!-- Start-err -->
      <div v-if="error" class="text-left text-yellow mt-4">
        <span>
          {{ error }}
        </span>
      </div>
      <!-- Star--direction -->

      <div class="w-full text-center mt-6">
        <span class="font-semibold"> I'm ready a member. </span>
        <span class="ml-1 font-extrabold text-yellow hover:text-white">
          <nuxt-link to="/login">LogIn</nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useRouter } from '@nuxtjs/composition-api';
import { store } from "../../store/index";

export default {
  setup() {
    const fullName = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const isPending = ref<boolean>(false);
    const error = ref<any>(null);
    const router = useRouter();

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
        router.push({ path: "/profile"});
      }
    }
  return {
    fullName,
    email,
    password,
    error,
    onSubmit,
    isPending
    }
  }
}
</script>
