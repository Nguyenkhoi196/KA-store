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
          <div class="relative">
            <input
              id="nameInput"
              v-model="product.name"
              type="text"
              autocomplete="off"
              class="form-input peer"
              style="padding: 4px; font-size: small; border: none"
              placeholder=""
              required
            />
            <label for="nameInput" class="form-label">Tên mặt hàng</label>
          </div>
          <div class="relative">
            <input
              id="brand"
              v-model="product.brand"
              type="text"
              autocomplete="off"
              class="form-input peer"
              style="padding: 4px; font-size: small; border: none"
              required
            />
            <label for="brand" class="form-label">Thương hiệu</label>
          </div>
          <div class="relative">
            <input
              id="price"
              v-model="product.price"
              type="number"
              autocomplete="off"
              class="form-input peer"
              style="padding: 4px; font-size: small; border: none"
              required
            />
            <label for="price" class="form-label">Giá</label>
          </div>
          <div class="relative">
            <input
              id="category"
              v-model="product.category"
              type="text"
              autocomplete="off"
              class="form-input peer"
              style="padding: 4px; font-size: small; border: none"
              required
            />
            <label for="category" class="form-label">Phân loại</label>
          </div>
          <div class="relative">
            <input
              id="inventory"
              v-model="product.inventory"
              autocomplete="off"
              class="form-input peer"
              style="padding: 4px; font-size: small; border: none"
              required
              type="number"
            />
            <label for="inventory" class="form-label">Số lượng</label>
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
@import '../assets/scss/components/_form.scss';
@import '../assets/scss/components/_button.scss';
</style>
