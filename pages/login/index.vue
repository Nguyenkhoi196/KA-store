<template>
  <div class="flex flex-col items-center justify-between h-full gap-10" >
    <DefaultLayout />
    <div class="container mx-auto px-8">
      <!-- ở đây -->
      <form
        class="flex flex-col space-y-6 justify-start"
        @submit.prevent="onSubmit"
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
      </form>
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
  </div>
</template>
<script lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from '@nuxtjs/composition-api';
import { store } from "../../store";
import DefaultLayout from '~/layouts/DefaultLayout.vue';

export default {
  components: {
    DefaultLayout
  },
  transition: 'slide-left',
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const isPending = ref<boolean>(false);
    const error = ref<any>('');
    const router = useRouter();
    console.log('err',error);


    watch([email, password],() => {
      error.value = ''
    })

    const onSubmit = async()=> {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value,
        });
      }
      catch (e: any) {
        error.value = e.message;
        console.log('error 111', error.value);

      }
      if (!error.value) {
        console.log('login success');
        router.push("/profile");
      }
    };

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
<style scoped>
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform .2s ease-in-out;
}

.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
