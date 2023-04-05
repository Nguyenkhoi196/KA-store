<template>
  <div class="mt-8 flex flex-col" >
    <DefaultLayout />
    <div class="container mx-auto px-8">
      <div
        class="flex flex-col space-y-6 justify-start"
      >
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
            class="font-semibold w-full px-4 py-3 rounded-lg border border-gray-900 text-yellow mt-1 text-center hover:bg-slate-500"
            @click="onSubmit"
          >
            LogIn
          </button>
          <button
            v-else
            type="button"
            class="cursor-not-allowed font-semibold w-full px-4 py-3 rounded-lg border border-gray-900 text-yellow bg-gray-300 mt-1 text-center"
            disabled
          >
            Loading...
          </button>
        </div>
      </div>
      <!-- Start-err -->
      <div v-if="error" class="text-left text-yellow mt-4">
        <span>
          {{ error }}
        </span>
      </div>
      <!-- Star--direction -->

      <div class="w-full text-center mt-6">
        <span class="font-semibold"> You are new member ? </span>
        <span class="ml-1 font-extrabold">
          <nuxt-link to="/signup">SignUp</nuxt-link>
        </span>
      </div>
    </div>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useRouter } from '@nuxtjs/composition-api';
import { store } from "../../store";
import DefaultLayout from '~/layouts/DefaultLayout.vue';

export default {
  components: {
    DefaultLayout
  },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const isPending = ref<boolean>(false);
    const error = ref<any>(null);
    const router = useRouter();

    const onSubmit = async()=> {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value,
        });
        console.log(email.value);
      }
      catch (e: any) {
        error.value = e.message;
        console.log(error.value);
        return false
      }
      if (!error.value) {
        router.push("/profile");
      }
    }

  return {
    email,
    password,
    error,
    onSubmit,
    isPending,
    }
  }
}
</script>
