<template>
  <div class="mt-8" >
    <div class="container mx-auto px-8 text-white">
      <form
        class="flex flex-col space-y-6 justify-start"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              v-model="fullName"
              class="px-4 py-3 rounded-lg border border-gray-900 bg-gray-400/10 text-black mt-1"
              type="text"
              placeholder="Hoola xin chao"
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
          >
            Sign Up
          </button>
          <button
            v-else
            type="button"
            class="cursor-not-allowed font-semibold w-full px-4 py-3 rounded-lg border border-gray-900 text-yellow bg-gray-300 mt-1 text-center hover:bg-yellow hover:text-white"
            disabled
          >
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
          <nuxt-link :to="{ name: 'login', params: {} }">Sign In</nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
// import { useRouter } from "vue-router";
import { userSignUp } from "~/composables/userSignUp";
// import router from "../router";
export default {
  setup() {
      const { error, isPending, signup } = userSignUp();
      const fullName = ref("");
      const email = ref("");
      const password = ref("");
      const router = this.$route;
      async function onSubmit() {
          await signup(email.value, password.value, fullName.value);
          if (!error.value)
              router.push({ name: "login", param: {} });
      }
      return { fullName, email, password, onSubmit, error, isPending };
  }
};
</script>
