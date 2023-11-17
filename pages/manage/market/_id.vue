<template>
  <div>
    <section class="container mx-auto min-h-screen h-full">
      <div class="w-auto mx-8 mt-5">
        <nuxt-link
          id="button-back"
          to="/manage/market"
          class="hover:text-secondaryDark"
        >
          <fa icon="chevron-left" class="self-center text-base icon" />
          <span class="pl-1">Trở lại</span>
        </nuxt-link>
        <div class="my-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            id="TabDetails"
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            data-tabs-toggle="#TabDetails"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                id="details-tab"
                class="inline-block p-3 border-b-2 rounded-t-lg"
                data-tabs-target="#details"
                type="button"
                role="tab"
                aria-controls="details"
                aria-selected="false"
              >
                Thông tin
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                id="dashboard-tab"
                class="inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Dashboard
              </button>
            </li>
          </ul>
        </div>
        <div id="TabDetails">
          <div
            id="details"
            class="px-16 py-10 border-[1px] solid border-gray-400 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel"
            aria-labelledby="details-tab"
          >
            <div class="flex flex-col">
              <h3 class="font-semibold text-secondaryDark text-3xl mb-5">
                {{ product?.name }}
              </h3>
              <ul class="mb-4 flex gap-5">
                <li>
                  <fa icon="check" style="color: #349f40" />
                  <span> Bán trực tiếp </span>
                </li>
                <li>
                  <fa :icon="['fas', 'xmark']" style="color: #c31d1d" />
                  <span> Không tích điểm </span>
                </li>
              </ul>
              <div class="flex justify-between">
                <div class="w-1/3">
                  <div
                    id="image-preview"
                    class="p-2 border-2 rounded-xl border-secondary"
                  >
                    <img
                      :src="product?.img ? product.img.url : previewUrl"
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
                </div>
                <div class="w-1/3">
                  <div class="px-6">
                    <div
                      class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Mã hàng :</label>
                      <div class="ml-14">{{ product?.id }}</div>
                    </div>
                  </div>
                  <div class="px-6">
                    <div
                      class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Giá bán :</label>
                      <div class="ml-14">{{ product?.price }}</div>
                    </div>
                  </div>
                  <div class="px-6">
                    <div
                      class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Giá nhập :</label>
                      <div class="ml-14">
                        {{ product?.price }}
                      </div>
                    </div>
                  </div>
                  <div class="px-6">
                    <div
                      class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Thương hiệu :</label>
                      <div class="ml-14">{{ product?.brand }}</div>
                    </div>
                  </div>
                  <div class="px-6">
                    <div
                      class="flex pt-4 justify-between pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Tồn kho :</label>
                      <input
                        v-model="productDetails.inventory"
                        class="pt-4 md:pt-0 text-end bg-transparent rtl hover:placeholder-secondary placeholder-shown:color-sencondary focus:border-b-[1px] focus:border-secondary"
                        :placeholder="product?.inventory"
                      />
                      <!-- <div class="ml-14">
                        {{ product?.inventory }}
                      </div> -->
                    </div>
                  </div>
                </div>
                <div class="w-1/3">mô tả</div>
              </div>

              <div class="self-end pt-5 flex gap-5 float-right">
                <button
                  id="button-modal-accept"
                  :disabled="!permissions?.delete.enabled"
                  class="button shadow-xl flex gap-3 text-primary bg-red-500 hover:bg-red-700"
                >
                  <fa icon="trash-can" />
                  <span> Xóa </span>
                </button>
                <button
                  id="button-modal-lock"
                  :disabled="!permissions?.update.enabled"
                  class="button shadow-xl flex gap-3 text-primary bg-red-500 hover:bg-red-700"
                >
                  <div v-if="product?.state === true">
                    <fa icon="ban" /> <span> Ngừng kinh doanh </span>
                  </div>
                  <div v-else>
                    <fa :icon="['fas', 'lock-open']" />
                    <span>Tái bán</span>
                  </div>
                </button>
                <button
                  :disabled="!product?.state || !permissions?.create.enabled"
                  class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
                >
                  <fa icon="copy" />
                  <span> Sao chép </span>
                </button>
                <button
                  :disabled="!permissions?.update.enabled"
                  class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
                  @click="uploadImage()"
                >
                  <fa icon="gear" />
                  <span> Cập nhật </span>
                </button>
              </div>
            </div>
          </div>
          <!-- {{ product }} -->
          <div
            id="dashboard"
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Dashboard tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </section>
    <modal-ka-modal :modal="'modal-accept'" :close="!!alert.type">
      <template #header>
        <div>
          <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <span class="text-red-500 text-xl font-semibold"
              >Xác nhận xóa Sản phẩm</span
            >
            <p class="pt-2">
              Bạn muốn xóa sản phẩm
              <span class="text-secondaryDark font-medium">
                {{ product?.name }}
              </span>
              trên hệ thống. Bạn có chắc chắn muốn xóa
            </p>
          </div>
        </div>
      </template>
      <template #body>
        <div>
          <div class="self-end pt-5 flex gap-5 float-right">
            <button
              class="button shadow-xl flex gap-3 text-red-500 hover:bg-red-700 hover:text-primary"
              @click="handleDeleteProduct"
            >
              <fa icon="trash" />
              <span> Xóa </span>
            </button>
            <div
              id="button-close-modal-accept"
              class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
            >
              <fa icon="hand" />
              <span> Trở lại </span>
            </div>
          </div>
        </div>
      </template>
    </modal-ka-modal>
    <modal-ka-modal :modal="'modal-lock'" :close="!!alert.type">
      <template #header>
        <div>
          <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <span class="text-orange-500 text-xl font-semibold"
              >Xác nhận cập nhật Sản phẩm</span
            >
            <p class="pt-2">
              Bạn muốn cập nhật sản phẩm
              <span class="text-secondaryDark font-medium">
                {{ product?.name }}
              </span>
              trên hệ thống?
            </p>
          </div>
        </div>
      </template>
      <template #body>
        <div>
          <div class="self-end pt-5 flex gap-5 float-right">
            <button
              class="button shadow-xl flex gap-3 text-orange-500 hover:bg-orange-200 hover:text-primary"
              @click="
                handleUpdateProduct(),
                  (productDetails.state = !productDetails.state)
              "
            >
              <fa icon="gear" />
              <span> Cập nhật </span>
            </button>
            <div
              id="button-close-modal-lock"
              class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
            >
              <fa icon="hand" />
              <span> Trở lại </span>
            </div>
          </div>
        </div>
      </template></modal-ka-modal
    >
    <alert-pop-up :alert="alert" />
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from '@nuxtjs/composition-api'
import { onMounted, reactive, ref, watchEffect } from 'vue'

import { deleteProduct, getProduct, updateProduct } from '~/api/Product'
import { getRoleDetails } from '~/api/User'
import { Alert } from '~/components/global/Alerts/Alert'
import { axios } from '~/plugins/axios'
import { Product } from '~/types/Product'

const product = ref<Product>()
const route = useRoute()
const router = useRouter()
const alert = reactive<Alert>({
  message: undefined,
  type: undefined,
  show: false,
  timeout: 2000,
})
const id = route.value.params.id
onMounted(() => {
  const query = { populate: '*' }
  getProduct(id, query).then((res) => {
    product.value = res.data.data
  })
  handleGetRoleDetails()
})

const role = ref()
if (process.client) {
  const roleStr = ref()
  roleStr.value = localStorage.getItem('role')
  role.value = JSON.parse(roleStr.value)
}

const permissions = ref()
const handleGetRoleDetails = async () => {
  const response = await getRoleDetails(role.value.id)
  permissions.value =
    response.data.role.permissions['api::product'].controllers.product
}

const handleDeleteProduct = (): void => {
  deleteProduct(id)
    .then((res) => {
      if (res.status === 200) {
        alert.message = `Xóa sản phẩm ${res.data.data?.name} thành công`
        alert.type = 'success'
        alert.show = true
        setTimeout(() => {
          alert.show = false
          router.push('/manage/market')
        }, alert.timeout)
      }
    })
    .catch((err) => {
      alert.message = err.message
      alert.type = 'danger'
    })
    .finally(() => {})
}

const productDetails = reactive({
  inventory: '',
  state: true || false,
})

const handleUpdateProduct = (): void => {
  const data = { data: { ...productDetails } }
  updateProduct(id, data)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.data.state === true) {
          alert.message = `Đã ngưng kinh doanh ${res.data.data.name} `
        } else {
          alert.message = `Đã tái kinh doanh ${res.data.data.name} `
        }
        alert.type = 'success'
        product.value = res.data.data
        watchEffect(() => {
          if (product.value?.state) {
            alert.show = true
            setTimeout(() => {
              alert.show = false
            }, alert.timeout)
          }
        })
      }
    })
    .catch((err) => {
      alert.message = err.message
      alert.type = 'danger'
    })
}

const selectedFile = ref<File | null>(null)
const previewUrl = ref<string | null | ArrayBuffer>(
  'https://res.cloudinary.com/dat9zyjdy/image/upload/v1697077672/thumbnail_default_image_5d6945e204.png'
)

const previewImage = (event: any) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()
    selectedFile.value = file
    reader.onload = () => {
      previewUrl.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}
const uploadImage = async () => {
  try {
    // if (!selectedFile.value) return

    const formData = new FormData()
    formData.append('files', selectedFile.value, selectedFile.value.name)
    formData.append('data', productDetails)
    await axios.post(`/api/product/${id}/update`, formData)
  } catch (error) {}
}
</script>

<style lang="scss" scoped>
[aria-selected='true'] {
  color: #9ae29b;
  border-color: #9ae29b;
}
#button-back {
  .icon {
    transition: transform 0.2s ease-in-out;
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
