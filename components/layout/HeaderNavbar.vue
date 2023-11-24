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
          data-dropdown-placement="bottom-end"
          class="text-secondary hover:text-secondaryDark self-center cursor-pointer flex items-center"
        >
          <span class="pr-2">
            {{ user.email }}
          </span>
          <span>
            <fa icon="caret-down" />
          </span>
        </a>
        <div v-else class="text-secondary nav-item">
          <nuxt-link to="/auth/login">Đăng nhập</nuxt-link>
        </div>
        <div
          id="dropdown-profile"
          class="hidden divide-y divide-gray-100 bg-secondary text-sm z-10 rounded-lg"
        >
          <ul class="py-2">
            <nuxt-link
              to="/profile"
              class="cursor-pointer flex items-center gap-3 px-5 py-1 text-primary hover:bg-secondaryDark"
            >
              <fa :icon="['fas', 'user']" />
              <span>Hồ sơ</span></nuxt-link
            >
            <button
              class="cursor-pointer flex items-center gap-3 px-5 py-1 text-primary hover:bg-secondaryDark"
              @click="logOut"
            >
              <fa icon="right-from-bracket" />
              <span>Đăng xuất</span>
            </button>
          </ul>
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
import useStorage from '~/composables/useStorage'

const route = useRoute()

const user = ref<User | any>()
if (process.client) {
  watch(
    () => route.value.path,
    () => {
      user.value = useStorage.getUserDetailsFromStorage()
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
    router.push('/auth/login')
  }
}
</script>
<style scoped>
.nav-item {
  @apply text-base font-medium items-center self-center py-4
  hover:scale-105;
}
</style>
