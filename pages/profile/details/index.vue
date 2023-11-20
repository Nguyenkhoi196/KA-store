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
            :src="
              user?.avatar
                ? user.avatar.url
                : 'https://res.cloudinary.com/dat9zyjdy/image/upload/v1700463925/KhoiAnh/empty.png'
            "
            class="max-h-[170px] w-full block h-fit mx-auto"
          />
        </section>
        <div>
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
                <div class="pt-4 md:pt-0">
                  {{ user?.info ? user.info[0].phone : 'Chưa cập nhật' }}
                </div>
              </div>
            </div>
            <div class="md:px-6 px-3">
              <div
                class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
              >
                <label class="w-fit">Email :</label>
                <div class="pt-4 md:pt-0">
                  {{ user?.info ? user.info[0].email : 'Chưa cập nhật' }}
                </div>
              </div>
            </div>
            <div class="md:px-6 px-3">
              <div
                class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
              >
                <label class="w-fit">Địa chỉ :</label>
                <div class="pt-4 md:pt-0">
                  {{ user?.info ? user.info[1].address : 'Chưa cập nhật' }}
                </div>
              </div>
            </div>
            <div class="md:px-6 px-3">
              <div
                class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
              >
                <label class="w-fit">Tỉnh/Thành phố :</label>
                <div class="pt-4 md:pt-0">
                  {{ user?.info ? user.info[1].city : 'Chưa cập nhật' }}
                </div>
              </div>
            </div>
          </section>
          <div class="flex self-end pt-5 gap-5 float-right">
            <button
              id="button-modal-update"
              class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
            >
              <fa icon="gear" />
              <span> Cập nhật </span>
            </button>
          </div>
        </div>
      </section>
    </section>
    <sidebar-left-drawer :sidebar="'sidebar'" />
    <modal-ka-modal :modal="'modal-update'">
      <template #header>
        <div class="py-4 border-b rounded-t dark:border-gray-600">
          <span class="text-secondary text-xl font-semibold"
            >Cập nhật thông tin</span
          >
        </div>
      </template>
      <template #body>
        <div class="pt-6">
          <form class="flex flex-col gap-4">
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
                <input
                  class="pt-4 md:pt-0 hover:placeholder-secondary placeholder-shown:color-sencondary focus:border-b-[1px] focus:border-secondary"
                  :placeholder="user?.info ? user.info[0].phone : ''"
                />
              </div>
            </div>
            <div class="md:px-6 px-3">
              <div
                class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
              >
                <label class="w-fit">Địa chỉ :</label>
                <input
                  class="pt-4 md:pt-0 hover:placeholder-secondary placeholder-shown:color-sencondary focus:border-b-[1px] focus:border-secondary"
                  :placeholder="user?.info[1].address"
                />
              </div>
            </div>

            <div class="md:px-6 px-3">
              <div
                class="pt-4 block md:flex justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
              >
                <label class="w-fit">Tỉnh/Thành phố :</label>
                <input
                  class="pt-4 md:pt-0 hover:placeholder-secondary placeholder-shown:color-sencondary focus:border-b-[1px] focus:border-secondary"
                  :placeholder="user?.info ? user.info[1].city : ''"
                />
              </div>
            </div>
            <div id="image-preview" class="px-3 md:px-6">
              <img
                :src="previewUrl"
                class="w-full rounded-lg block h-auto mx-auto"
              />
              <input
                id="button-image-preview"
                class="absolute color-secondary hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                accept="image/*"
                type="file"
                @change="previewImage($event)"
              />
            </div>
          </form>
          <div class="self-end pt-5 flex gap-5 float-right">
            <button
              class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
            >
              <fa icon="gear" />
              <span> Cập nhật </span>
            </button>
          </div>
        </div>
      </template>
    </modal-ka-modal>
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
  avatar?: any
}
const user = ref<User>()
const previewUrl = ref<string | ArrayBuffer>()
onMounted(() => {
  handleGetUserDetails()
})
const handleGetUserDetails = async () => {
  try {
    const result = await getUserDetails({ populate: '*' })
    user.value = result.data
    previewUrl.value = result.data.avatar.url
  } catch (error) {}
}
const previewImage = (event: any) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      previewUrl.value = reader.result as string
    }
    reader.readAsDataURL(file)
  }
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
#image-preview {
  position: relative;
  &:hover {
    opacity: 0.5;
    #button-image-preview {
      display: block;
    }
  }
}
</style>
