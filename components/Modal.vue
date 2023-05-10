<template>
  <div>
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0"
    >
      <div class="relative p-4 w-full h-full md:h-auto">
        <!-- Modal content -->

        <!-- Modal header -->
        <div
          class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
        >
          <h3 class="text-base font-semibold text-primary">Thêm hàng hóa</h3>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="addProduct">
          <div class="modal-container">
            <div>
              <label for="name" class="modal-label">Tên mặt hàng</label>
              <input
                id="name"
                v-model="product.name"
                type="text"
                class="form-input w-full"
                style="padding: 4px"
                required
              />
            </div>
            <div>
              <label for="brand" class="modal-label">Thương hiệu</label>
              <input
                id="brand"
                v-model="product.brand"
                type="text"
                class="form-input w-full"
                style="padding: 4px"
                required
              />
            </div>
            <div>
              <label for="price" class="modal-label">Giá</label>
              <input
                id="price"
                v-model="product.price"
                type="number"
                class="form-input w-full"
                style="padding: 4px"
                required
              />
            </div>
            <div>
              <label for="category" class="modal-label">Phân loại</label>
              <input
                id="category"
                v-model="product.category"
                type="text"
                class="form-input w-full"
                style="padding: 4px"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="inventory" class="modal-label">Số lượng</label>
              <input
                id="inventory"
                v-model="product.inventory"
                class="form-input w-full"
                style="padding: 4px"
                required
                type="number"
              />
            </div>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="form-button"
              style="font-size: 13px; padding: 5px"
            >
              Thêm sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { store } from '~/store'

export default {
  name: 'ModalProduct',
  setup() {
    const product = reactive({})

    const addProduct = async () => {
      try {
        await store.dispatch('addProduct', product)
        console.log(product)
      } catch (e) {}
    }

    return {
      product,
      addProduct,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/_modal.scss';
@import '../assets/scss/components/_button.scss';
</style>
