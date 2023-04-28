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
        <div
          class="relative p-2 bg-secondary/20 rounded-lg hover:shadow-none"
        >
          <!-- Modal header -->
          <div
            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 "
          >
            <h3 class="text-base font-semibold text-primary">Thêm hàng hóa</h3>
          </div>
          <!-- Modal body -->
          <form @submit.prevent="submit">
            <div class="modal-container">
              <div>
                <label
                  for="name"
                  class="modal-label"
                  >Tên mặt hàng</label
                >
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  name="name"
                  class="form-input w-full"
                  style="padding: 4px"
                  required
                />
              </div>
              <div>
                <label
                  for="brand"
                  class="modal-label"
                  >Nhãn hiệu</label
                >
                <input
                  id="brand"
                  v-model="brand"
                  type="text"
                  name="brand"
                  class="form-input w-full"
                  style="padding: 4px"
                  required
                />
              </div>
              <div>
                <label
                  for="price"
                  class="modal-label"
                  >Giá</label
                >
                <input
                  id="price"
                  v-model="price"
                  type="number"
                  name="price"
                  class="form-input w-full"
                  style="padding: 4px"
                  required
                  oninvalid=""
                />
              </div>
              <div>
                <label
                  for="category"
                  class="modal-label"
                  >Phân loại</label
                >
                <select
                  id="category"
                  v-model="category"
                  required
                  class="form-input w-full"
                  style="padding: 4px"
                >
                  <option selected="">Select category</option>
                  <option value="Sắt">Sắt</option>
                  <option value="Nhôm">Nhôm</option>
                  <option value="Tôn">Tôn</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="inventory"
                  class="modal-label"
                  >Số lượng</label
                >

                <input
                  id="inventory"
                  v-model="inventory"
                  rows="4"
                  class="form-input w-full"
                  style="padding: 4px"

                  required
                  type="number"
                ></input>
              </div>
            </div>
            <button
            type="submit"
              class="form-button  w-1/2"
              style="font-size: 13px; padding: 5px"
            >
              Thêm sản phẩm
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

import { Product } from '~/types/Product'

export default {
  name: 'ModalProduct',
  setup() {
    const name = ref<Product>('')
    const brand = ref<Product>('')
    const price = ref<Product>('')
    const inventory = ref<Product>('')
    const category = ref<Product>('')
    const fs = getFirestore()

    const submit = async () => {
      await addProduct(
        name.value,
        brand.value,
        category.value,
        price.value,
        inventory.value,
        fs
      )
    }

    const addProduct = async (
      name,
      brand,
      category,
      price,
      inventory,
      fs
    ) => {
      try {
        const fsProduct = collection(fs, 'products')
        const allProductInfor = await addDoc(fsProduct, {
          name,
          brand,
          category,
          price,
          inventory,
        })
      } catch (e) {
      }
    }

    return {
      name,
      brand,
      price,
      category,
      inventory,
      submit,
      addProduct,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/_modal.scss';
@import '../assets/scss/components/_button.scss'
</style>
