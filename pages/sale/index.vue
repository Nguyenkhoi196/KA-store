<template>
  <div>
    <div class="fixed w-screen">
      <section id="cart-header" class="flex justify-between p-3 bg-secondary">
        <div id="header-left" class="flex">
          <div
            id="search-box"
            class="max-w-2xl min-w-[450px] mr-4 text-secondary/70 rounded relative grow flex-wrap items-stretch flex"
          >
            <span class="absolute self-center left-4 z-10">
              <fa icon="magnifying-glass" />
            </span>
            <input
              type="text"
              placeholder="Nhập mặt hàng"
              class="flex-auto border-[1px] border-solid border-black relative float-left pl-10 mb-0 z-[2] focus:outline-dotted focus:shadow-inner focus:ring-none bg-white rounded-lg"
            />
          </div>
          <div id="tab-cart">
            <div class="">
              <ul
                id="default-tab"
                class="flex flex-wrap text-sm font-medium text-center"
                data-tabs-toggle="#card-body"
                role="tablist"
              >
                <li class="me-2" role="presentation">
                  <button
                    id="profile-tab"
                    class="button-tab inline-block p-2 text-white"
                    data-tabs-target="#tab-1"
                    type="button"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                  >
                    Profile
                  </button>
                </li>
                <li class="me-2" role="presentation">
                  <button
                    id="dashboard-tab"
                    class="button-tab inline-block p-2 text-white"
                    data-tabs-target="#tab-2"
                    type="button"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                  >
                    Dashboard
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="header-right" class="max-w-sm grow-0 self-center pr-4">
          <ul id="menu-cart" class="icon-list flex gap-2">
            <li class="text-primary flex p-2">
              <fa icon="bag-shopping" />
            </li>

            <li class="text-primary flex p-2">
              <fa icon="rotate-left" />
            </li>
            <li class="text-primary flex p-2">
              <fa icon="arrows-rotate" />
            </li>

            <li class="text-primary flex p-2">
              <fa icon="print" />
            </li>
            <!-- <span class="self-center">{{ user.username }}</span> -->
            <li
              class="text-primary flex p-2 ml-4"
              data-dropdown-toggle="dropdown-menu"
              data-dropdown-trigger="click"
              data-dropdown-placement="bottom-end"
            >
              <fa icon="ellipsis-vertical" />
            </li>
            <div
              id="dropdown-menu"
              class="hidden shadow-xl text-sm z-10 rounded-lg"
            >
              <ul class="py-2">
                <nuxt-link
                  to="/manage/market"
                  class="cursor-pointer flex items-center gap-1 px-3 py-1"
                >
                  <fa icon="box" />
                  <span class="pl-3">Quản lý</span>
                </nuxt-link>
                <li class="cursor-pointer flex items-center gap-1 px-3 py-1">
                  <fa icon="arrow-right-from-bracket" />
                  <span class="pl-3">Đăng xuất</span>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </section>
      <section id="card-body" class="container mx-auto">
        <div class="col-left">
          <div>
            <div
              id="tab-1"
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">test-tab 1</p>
            </div>
            <div
              id="tab-2"
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              role="tabpanel"
              aria-labelledby="tab-2"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">test tab 2</p>
            </div>
          </div>
          <div id="note">note</div>
        </div>
        <div class="col-right"></div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { store } from '~/store'
import { User } from '~/types/User'

// import { onMounted } from "vue";
const user = ref<User | any>()
const userStr = ref<any>()
if (process.client) {
  userStr.value = localStorage.getItem('user')
  user.value = userStr.value
    ? JSON.parse(userStr.value)
    : store.state.users.user.data?.email
}
</script>

<style scoped lang="scss"></style>
