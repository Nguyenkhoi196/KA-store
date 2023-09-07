<template>
  <div>
    <div
      :id="props.sidebar"
      class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64"
      tabindex="-1"
    >
      <div class="flex">
        <span
          id="drawer-navigation-label"
          class="text-xs self-center pr-2 font-semibold text-secondary uppercase dark:text-gray-400"
        >
          {{ user?.email }}
        </span>
        <button
          :id="'button-close-' + props.sidebar"
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <fa icon="x" />
          <span class="sr-only">Close menu</span>
        </button>
      </div>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-secondary/30 group"
            >
              <fa icon="chart-pie" />
              <span class="ml-3">Thống kê</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-secondary/30"
              aria-controls="dropdown-sidebar-store"
              data-collapse-toggle="dropdown-sidebar-store"
            >
              <div>
                <fa icon="arrow-right-arrow-left" />
                <span class="ml-3 whitespace-nowrap">Giao dịch</span>
              </div>
              <fa icon="caret-down" />
            </button>
            <ul id="dropdown-sidebar-store" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-secondary/30"
                >
                  <fa icon="money-bill" />
                  <span class="ml-3 whitespace-nowrap">Đơn mua</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-secondary/30"
                >
                  <fa icon="file-invoice-dollar" />
                  <span class="ml-3 whitespace-nowrap">Hóa đơn</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-secondary/30"
              aria-controls="dropdown-sidebar-partner"
              data-collapse-toggle="dropdown-sidebar-partner"
            >
              <div>
                <fa icon="handshake" />
                <span class="ml-3 whitespace-nowrap">Đối tác</span>
              </div>
              <fa icon="caret-down" />
            </button>
            <ul id="dropdown-sidebar-partner" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-secondary/30"
                >
                  <fa icon="person-arrow-up-from-line" />
                  <span class="ml-3 whitespace-nowrap">Khách hàng</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-secondary/30"
                >
                  <fa icon="person-arrow-down-to-line" />
                  <span class="ml-3 whitespace-nowrap">Nhà cung cấp</span>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="/market"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-secondary/30 group"
            >
              <fa icon="bag-shopping" />
              <span class="flex-1 ml-3 whitespace-nowrap">Sản phẩm</span>
            </a>
          </li>
          <li>
            <a
              href="/profile"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-secondary/30 group"
            >
              <fa icon="house-user" />
              <span class="flex-1 ml-3 whitespace-nowrap"
                >Thông tin cửa hàng</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Drawer, DrawerInterface, DrawerOptions } from 'flowbite'
import { User } from '../../../types/User'
import { store } from '../../../store'

interface Props {
  sidebar: string
}

let sidebar: DrawerInterface

const props = defineProps<Props>()
const user = ref<User | any>()
const userStr = ref<any>()
if (process.client) {
  const linkElements = document.getElementsByTagName('a')
  console.log(linkElements)

  for (let i = 0; i < linkElements.length; i++) {
    const hrefValue = linkElements[i].href
    console.log(hrefValue)
  }
  userStr.value = localStorage.getItem('user')
  user.value = userStr.value
    ? JSON.parse(userStr.value)
    : store.state.users.user.data?.email
}
onMounted(() => {
  const $buttonElement: any = document.getElementById(`button-${props.sidebar}`)
  const $sideBarElement = document.getElementById(`${props.sidebar}`)
  const $closeElement: any = document.getElementById(
    `button-close-${props.sidebar}`
  )
  const options: DrawerOptions = {
    placement: 'left',
    backdrop: true,
    bodyScrolling: true,
    backdropClasses:
      'bg-gray-200 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
  }
  if ($sideBarElement) {
    sidebar = new Drawer($sideBarElement, options)
    $buttonElement.addEventListener('click', () => sidebar.toggle())
    $closeElement.addEventListener('click', () => sidebar.hide())
  }
})
</script>

<style scoped></style>
