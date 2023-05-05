<template>
  <div>
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal"
    >
      <div class="relative p-4 w-full h-full md:h-auto">
        <!-- Modal content -->
        <div
          class="relative p-2 bg-secondary/20 rounded-lg shadow-sm hover:shadow-none shadow-current"
        >
          <!-- Modal header -->
          <div
            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 "
          >
            <h3 class="text-lg font-semibold text-primary">Add Product</h3>
            <button
              type="button"
              class="text-secondary hover:text-opacity-70 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-cente"
              data-modal-toggle="defaultModal"
              @click="setShowModal(false)"
            >
              <span class="">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form @submit.prevent="submit">
            <div class="modal-container">
              <div>
                <label
                  for="name"
                  class="modal-label"
                  >Name</label
                >
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  name="name"
                  class="modal-input"
                  placeholder="Type product name"
                  required

                />
              </div>
              <div>
                <label
                  for="brand"
                  class="modal-label"
                  >Brand</label
                >
                <input
                  id="brand"
                  v-model="brand"
                  type="text"
                  name="brand"
                  class="modal-input"
                  placeholder="Product brand"
                  required
                />
              </div>
              <div>
                <label
                  for="price"
                  class="modal-label"
                  >Price</label
                >
                <input
                  id="price"
                  v-model="price"
                  type="number"
                  name="price"
                  class="modal-input"
                  placeholder="$2999"
                  required
                  oninvalid=""
                />
              </div>
              <div>
                <label
                  for="category"
                  class="modal-label"
                  >Category</label
                >
                <select
                  id="category"
                  v-model="category"
                  required
                  class="modal-input"
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
                  >Inventory</label
                >

                <input
                  id="inventory"
                  v-model="inventory"
                  rows="4"
                  class="modal-input"
                  placeholder="Inventory"
                  required
                  type="number"
                ></input>
              </div>
            </div>
            <button
            type="submit"
              class="button-submit text-primary"
              @click="setShowModal(false)"
            >
              Add new product
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
  props: ['setShowModal', 'isModalVisible'],
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
