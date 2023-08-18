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
          class="text-secondary hover:text-secondaryDark self-center cursor-pointer flex items-center"
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
          class="hidden divide-y divide-gray-100 bg-secondary text-sm z-10 rounded-lg"
        >
          <ul class="py-2">
            <nuxt-link
              to="/profile"
              class="cursor-pointer flex items-center gap-1 px-5 py-1 text-primary hover:bg-secondaryDark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q1.325 0 2.5-.388t2.15-1.112q-.975-.725-2.15-1.113T12 17q-1.325 0-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20Zm0-9q.65 0 1.075-.425T13.5 9.5q0-.65-.425-1.075T12 8q-.65 0-1.075.425T10.5 9.5q0 .65.425 1.075T12 11Zm0-1.5Zm0 9Z"
                />
              </svg>
              <span>Hồ sơ</span></nuxt-link
            >
            <button
              class="cursor-pointer flex items-center gap-1 px-5 py-1 text-primary hover:bg-secondaryDark"
              @click="logOut"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"
                />
              </svg>
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
