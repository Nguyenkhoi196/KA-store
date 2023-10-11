<template>
  <div>
    <section class="container mx-auto min-h-screen h-full">
      <section class="w-auto mx-8">
        <div class="mr-8 mb-8 mt-6">
          <button
            id="button-sidebar"
            type="button"
            class="text-4xl font-bold pb-6 items-center flex -translate-x-[10%]"
          >
            <fa class="icon text-base self-center" icon="angles-left" />
            <span class="pl-2"> Thông tin </span>
          </button>
        </div>
      </section>
      <section class="flex justify-evenly mx-5">
        <section class="w-auto hidden md:flex">
          <img
            src="../../../assets/images/logo.png"
            class="max-h-[170px] w-full block h-auto mx-auto"
          />
        </section>
        <section class="grid grid-cols-2 min-w-fit h-fit">
          <div class="md:px-6 px-3">
            <div
              class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Tên người dùng :</label>
              <div class="pt-4 md:pt-0">{{ user?.username }}</div>
            </div>
          </div>
          <div class="md:px-6 px-3">
            <div
              class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Tên đăng nhập :</label>
              <div class="pt-4 md:pt-0">{{ user?.email }}</div>
            </div>
          </div>
          <div class="md:px-6 px-3">
            <div
              class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Vai trò :</label>
              <div class="pt-4 md:pt-0">{{ user?.role?.name }}</div>
            </div>
          </div>
          <div class="md:px-6 px-3">
            <div
              class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Điện thoại :</label>
              <div class="pt-4 md:pt-0">{{ user?.info[0]?.phone }}</div>
            </div>
          </div>
          <div class="md:px-6 px-3">
            <div
              class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Email :</label>
              <div class="pt-4 md:pt-0">{{ user?.info[0]?.email }}</div>
            </div>
          </div>
          <div class="md:px-6 px-3">
            <div
              class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Địa chỉ :</label>
              <div class="pt-4 md:pt-0">test</div>
            </div>
          </div>
          <div class="md:px-6 px-3">
            <div
              class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Phường xã :</label>
              <div class="pt-4 md:pt-0">test</div>
            </div>
          </div>
          <div class="md:px-6 px-3">
            <div
              class="block md:flex pt-4 justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-fit">Tỉnh, Thành phố :</label>
              <div class="pt-4 md:pt-0">test</div>
            </div>
          </div>
        </section>
      </section>
    </section>
    <SidebarLeftDrawer :sidebar="'sidebar'" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getUserDetails } from '~/api/User'
import { userRole } from '~/types/User'

type Contacts = {
  phone?: string
  email: string
}
type Locations = {
  address: string
  city: string
}
type User = {
  username: string
  email: string
  role?: userRole
  info?: (Contacts & Locations)[]
}
const user = ref<User>()
onMounted(() => {
  handleGetUserDetails()
})
const handleGetUserDetails = async () => {
  try {
    const result = await getUserDetails({ populate: '*' })
    user.value = result.data
  } catch (error) {}
}
</script>

<style scoped lang="scss">
#button-sidebar {
  .icon {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    .icon {
      transform: translateX(-4px);
    }
  }
}
</style>
