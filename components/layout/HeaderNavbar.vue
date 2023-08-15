<template>
  <div>
    <div
      class="absolute flex flex-row justify-between w-screen px-10 py-5 h-24 border-b-[1px] border-tertiary bg-primary/60"
    >
      <div class="flex">
        <img class="h-auto" src="../../static/logoHeader.png" alt="" />
      </div>
      <div class="flex flex-row justify-between gap-6">
        <div v-if="!user?.email" class="min-w-sm self-center">
          <form action="" class="flex flex-row">
            <input type="text" placeholder="Tìm kiếm" class="px-2 py-1" />
            <button class="">
              <span class="h-3 w-3 block"> </span>
            </button>
          </form>
        </div>

        <div class="nav-item text-tertiary">
          <nuxt-link to="">Về chúng tôi </nuxt-link>
        </div>
        <div class="nav-item text-tertiary">
          <nuxt-link to="">Sản phẩm</nuxt-link>
        </div>
        <div class="nav-item text-tertiary">
          <nuxt-link to="">Thông báo</nuxt-link>
        </div>
        <a
          v-if="user?.email"
          data-dropdown-toggle="dropdown-profile"
          data-dropdown-trigger="hover"
          class="text-secondary self-center cursor-pointer flex items-center"
        >
          <span class="pr-2">
            {{ user.email }}
          </span>
          <span>
            <svg
              class="w-3 h-3 text-current dark:text-tertiary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </span>
        </a>
        <div v-else class="text-secondary nav-item">
          <nuxt-link to="/login">Đăng nhập</nuxt-link>
        </div>
        <div
          id="dropdown-profile"
          class="hidden z-20 absolute border-[1px] px-10 py-3 rounded bg-primary"
        >
          <div class="flex flex-col gap-4">
            <nuxt-link to="/profile"> Hồ sơ</nuxt-link>
            <button @click="logOut">Đăng xuất</button>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from '@nuxtjs/composition-api'
import { ref, watch } from 'vue'
import { store } from '../../store'
import { User } from '~/types/User'

const route = useRoute()

const user = ref<User | any>()
if (process.client) {
  watch(
    () => route.value.path,
    () => {
      const userStr = ref<any>()
      userStr.value = localStorage.getItem('user')
      user.value = userStr.value
        ? JSON.parse(userStr.value)
        : store.state.users.user.data?.email
    },
    { deep: true, immediate: true }
  )
}
const router = useRouter()
const error = ref()
const logOut = () => {
  try {
    store.dispatch('logout')
  } catch (e: any) {
    error.value = e.message
  }
  if (!error.value) {
    router.push('/login')
  }
}
</script>
<style scoped>
.nav-item {
  @apply text-base font-medium items-center self-center py-4
  hover:scale-105;
}
</style>
