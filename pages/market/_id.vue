<template>
  <div>
    <section class="container mx-auto min-h-screen h-full">
      <div class="w-auto mx-8 mt-5">
        <nuxt-link
          id="button-back"
          to="/market"
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
                {{ product?.attributes.name }}
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
                <div class="w-1/3">ảnh</div>
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
                      <div class="ml-14">{{ product?.attributes.price }}</div>
                    </div>
                  </div>
                  <div class="px-6">
                    <div
                      class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Giá nhập :</label>
                      <div class="ml-14">
                        {{ product?.attributes?.price }}
                      </div>
                    </div>
                  </div>
                  <div class="px-6">
                    <div
                      class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Thương hiệu :</label>
                      <div class="ml-14">{{ product?.attributes.brand }}</div>
                    </div>
                  </div>
                  <div class="px-6">
                    <div
                      class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
                    >
                      <label class="w-28">Tồn kho :</label>
                      <div class="ml-14">
                        {{ product?.attributes.inventory }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-1/3">mô tả</div>
              </div>

              <div class="self-end pt-5 flex gap-5 float-right">
                <button
                  id="button-modal-accept"
                  class="button shadow-xl flex gap-3 text-primary bg-red-500 hover:bg-red-700"
                >
                  <fa icon="trash-can" />
                  <span> Xóa </span>
                </button>
                <button
                  id="button-modal-lock"
                  class="button shadow-xl flex gap-3 text-primary bg-red-500 hover:bg-red-700"
                >
                  <div v-if="product?.attributes.state === true">
                    <fa icon="ban" /> <span> Ngừng kinh doanh </span>
                  </div>
                  <div v-else>
                    <fa :icon="['fas', 'lock-open']" />
                    <span>Tái bán</span>
                  </div>
                </button>
                <button
                  :disabled="!product?.attributes.state"
                  class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
                >
                  <fa icon="copy" />
                  <span> Sao chép </span>
                </button>
                <button
                  class="button shadow-xl flex gap-3 text-primary bg-secondary hover:bg-secondaryDark"
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
    <Modal-KAModal :modal="'modal-accept'" :close="!!alert.type">
      <template #header>
        <div>
          <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <span class="text-red-500 text-xl font-semibold"
              >Xác nhận xóa Sản phẩm</span
            >
            <p class="pt-2">
              Bạn muốn xóa sản phẩm
              <span class="text-secondaryDark font-medium">
                {{ product?.attributes.name }}
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
    </Modal-KAModal>
    <Modal-KAModal :modal="'modal-lock'" :close="!!alert.type">
      <template #header>
        <div>
          <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <span class="text-orange-500 text-xl font-semibold"
              >Xác nhận cập nhật Sản phẩm</span
            >
            <p class="pt-2">
              Bạn muốn cập nhật sản phẩm
              <span class="text-secondaryDark font-medium">
                {{ product?.attributes.name }}
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
      </template></Modal-KAModal
    >
    <AlertPopUp :alert="alert" />
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from '@nuxtjs/composition-api'
import { onMounted, reactive, ref, watchEffect } from 'vue'

import { deleteProduct, getProduct, updateProduct } from '~/api/Product'
import { Alert } from '~/components/global/Alerts/Alert'
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
  getProduct(id).then((res) => {
    product.value = res.data
  })
})

const handleDeleteProduct = (): void => {
  deleteProduct(id)
    .then((res) => {
      if (res.status === 200) {
        alert.message = `Xóa sản phẩm ${res.data.data.attributes?.name} thành công`
        alert.type = 'success'
        alert.show = true
        setTimeout(() => {
          alert.show = false
          router.push('/market')
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
  state: true || false,
})

const handleUpdateProduct = (): void => {
  const data = { data: { ...productDetails } }
  updateProduct(id, data)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.data.attributes.state === true) {
          alert.message = `Đã ngưng kinh doanh ${res.data.data.attributes.name} `
        } else {
          alert.message = `Đã tái kinh doanh ${res.data.data.attributes.name} `
        }
        alert.type = 'success'

        product.value = res.data.data
        watchEffect(() => {
          if (product.value?.attributes.state) {
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
</style>
