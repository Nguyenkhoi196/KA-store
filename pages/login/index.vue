<template>
  <nuxt-layout>
    <div class="mt-8">
      <div class="container mx-auto px-8 text-white">
        <!-- Form -->
        <form
          class="flex flex-col space-y-6 justify-start"
          @submit.prevent="onSubmit"
        >
          <div class="row">
            <label class="flex flex-col" for="fullName">
              <span class="font-semibold">Email</span>
              <input
                v-model="email"
                class="px-4 py-3 rounded-lg border bg-gray-400/10 text-white mt-1"
                type="text"
                placeholder="@gmail.com"
              />
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="password">
              <span class="font-semibold">Password</span>
              <input
                v-model="password"
                class="px-4 py-3 rounded-lg border bg-gray-400/10 text-white mt-1"
                type="text"
                placeholder="password"
                autocomplete="username"
              />
            </label>
          </div>
          <div class="row">
            <button
              v-if="!isPending"
              type="submit"
              class="w-full font-semibold px-4 py-3 rounded-lg border bg-white text-yellow mt-1 text-center hover:bg-yellow hover:text-white"
            >
              Sign In
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
          <span class="font-semibold"> I'm new user </span>
          <span class="ml-1 font-extrabold text-yellow hover:text-white">
            <nuxt-link :to="{ name: 'register', params: {} }"
              >Sign Up</nuxt-link
            >
          </span>
        </div>
      </div>
    </div>
  </nuxt-layout>
</template>

<script lang="ts">
import { ref } from "vue";
// import { definePageMeta } from '@nuxtjs/meta'
// import Route from "vue-router";
import { userSignIn } from "~/composables/userSignIn";

// definePageMeta({
//   layout: "AuthLayout",
// })

export default {
  setup() {
    const { error, isPending, signin } = userSignIn();
    const email = ref("");
    const password = ref("");
    const router = this.$route;
    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value)
        router.push({ name: "profile", param: {} });
    }
    return { onSubmit, email, password, error, isPending };
  },
};
</script>

<!-- <style lang="scss" scoped></style> -->

