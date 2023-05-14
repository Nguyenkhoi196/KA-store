<template>
  <div
    class="fixed top-0 left-0 z-50 bg-secondary justify-between rounded-b-lg"
  >
    <div
      class="flex flex-row items-center justify-between h-16 px-4 w-screen bg-secondary text-tertiary"
    >
      <h1 v-if="!isActive.showInput" class="font-bold text-2xl">Hàng Hóa</h1>
      <input
        v-if="isActive.showInput"
        v-model="searchKeyword"
        type="text"
        class="form-input"
        placeholder="Tìm kiếm"
        style="border-bottom: 1px solid white; color: white"
        @input="searchedProduct"
      />
      <div class="flex flex-row gap-4 text-base pl-4">
        <button class="button-icon" @click="setActive(1, true)">
          <fa :icon="['fas', 'magnifying-glass']" />
        </button>
        <button class="button-icon" @click="setActive(2, false)">
          <fa :icon="['fas', 'filter']" />
        </button>
        <button class="button-icon" @click="setActive(3, false)">
          <fa :icon="['fas', 'ellipsis-vertical']" />
        </button>
      </div>
    </div>
    <div
      class="border-t-[1px] border-primary py-1 px-4 justify-between flex flex-row items-center"
    >
      <p class="text-gray-500">
        {{ totalProduct }} Hàng hóa - Tồn kho: {{ totalQuantity }}
      </p>
      <button class="button-icon text-tertiary" @click="setActive(4, false)">
        <fa :icon="['fas', 'plus']" />
      </button>
    </div>
    <div
      v-if="isActive.showModal === 2"
      class="border-t-[1px] py-4 px-4 border-primary"
    >
      <div class="flex flex-row gap-4">
        <!-- category -->
        <div class="flex flex-col gap-4">
          <label for="category" class="modal-label">Loại hàng</label>
          <select
            id="category"
            v-model="category"
            class="modal-select"
            style="padding: 4px"
          >
            <option disabled value="">Chọn loại hàng</option>
            <option
              v-for="(product, index) in products"
              id="category"
              :key="index"
              :value="product.category"
            >
              {{ product.category }}
            </option>
          </select>
        </div>
        <!-- inventory -->
        <div class="flex flex-col gap-4">
          <label for="inventory"> Tồn kho </label>
          <div>
            <input
              id="1"
              v-model="stock"
              type="radio"
              value="inStock"
              class="form-radio"
              checked
            />
            <label for="1">Còn hàng</label>
          </div>
          <div>
            <input
              id="2"
              v-model="stock"
              type="radio"
              value="outOfStock"
              class="form-radio"
            />
            <label for="2">Hết hàng</label>
          </div>
        </div>
        <!-- price -->
        <div class="flex flex-col gap-4">
          <!-- <label for="price" class="modal-label">Giá sản phẩm</label> -->
          <!-- <p>Giá sản phẩm: <output id="price"></output></p>
          <input id="price" type="range" min="0" max="10" /> -->
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="form-button"
          style="font-size: 13px; padding: 5px"
          type="submit"
          @click="filterChange"
        >
          Lọc sản phầm
        </button>
      </div>
    </div>
    <div v-if="isActive.showModal === 3">modal3</div>
    <modal-product v-if="isActive.showModal === 4" />
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import ModalProduct from '~/components/Modal.vue'
import { Product } from '~/types/Product'

export default {
  name: 'HeaderMarket',
  components: { ModalProduct },
  props: {
    totalProduct: {
      type: Number,
      required: true,
    },
    products: {
      type: Array as () => Product[],
      required: true,
    },
    totalQuantity: {
      type: Number,
      required: true,
    },
  },
  emits: ['searched-product', 'filtered-product'],
  setup(props, { emit }) {
    const stock = ref()
    const category = ref()
    const searchKeyword = ref<string>('')
    const isActive = reactive({ showModal: 0, showInput: false })

    const setActive = (numberModal: any) => {
      if (isActive.showModal === numberModal) {
        isActive.showModal = 0
      } else {
        isActive.showModal = numberModal
      }
      if (numberModal === 1) {
        isActive.showInput = !isActive.showInput
      } else {
        isActive.showInput = false
      }
    }

    const searchedProduct = () => {
      emit('searched-product', searchKeyword.value)
    }

    const filterChange = () => {
      emit('filtered-product', category.value, stock.value)
      console.log('header', category.value, stock.value)
    }

    return {
      isActive,
      searchKeyword,
      stock,
      category,
      searchedProduct,
      setActive,
      filterChange,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/button';
@import '../assets/scss/components/form';
@import '../assets/scss/components/modal';

::placeholder {
  color: white;
}
</style>
