<template>
  <div class="bg-primary h-screen p-2 gap-4">
    <nuxt-link to="/market" class="button-icon text-tertiary">
      <fa :icon="['fas', 'angle-left']" />
      {{ product.name }}
    </nuxt-link>

    <form>
      <div class="modal-container" style="color: black">
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="name"
            v-model="product.name"
            type="text"
            name="name"
            class="form-input peer"
            :placeholder="product.name"
          />
          <label for="name" class="form-label">Tên mặt hàng</label>
        </div>
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="brand"
            v-model="product.brand"
            type="text"
            name="brand"
            class="form-input peer"
            :placeholder="product.brand"
          />
          <label for="brand" class="form-label">Thương hiệu</label>
        </div>
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="price"
            v-model="product.price"
            type="number"
            name="price"
            class="form-input peer"
            :placeholder="product.price"
            oninvalid=""
          />
          <label for="price" class="form-label">Giá bán</label>
        </div>
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="category"
            v-model="product.category"
            class="form-input peer"
            :placeholder="product.category"
            type="text"
          />
          <label for="category" class="form-label">Phân loại</label>
        </div>
        <div class="relative mb-4" data-te-input-wrapper-init>
          <input
            id="inventory"
            v-model="product.inventory"
            class="form-input peer"
            :placeholder="product.inventory"
            type="number"
          />
          <label for="inventory" class="form-label">Tồn kho</label>
        </div>
      </div>
      <div class="w-full flex flex-row gap-4 justify-end">
        <button
          type="button"
          class="form-button text-red-500"
          @click="deleteData"
        >
          Xóa mặt hàng
        </button>
        <button
          type="button"
          class="form-button text-secondary"
          @click="updateData"
        >
          Cập nhật
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from '@nuxtjs/composition-api'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { store } from '~/store'

export default {
  layout: 'AuthLayout',
  emits: ['delete'],
  setup() {
    const route = useRoute()
    const router = useRouter()

    const product = ref('')
    const productId = route.value.params.id
    const fs = getFirestore()
    const docRef = doc(fs, 'products', productId)

    const readData = async () => {
      const productSnapshot = await getDoc(docRef)
      const productData = productSnapshot.data()
      product.value = productData
    }

    const updateData = async () => {
      try {
        await store.dispatch('updateProduct', {
          docRef,
          value: product.value,
        })
        router.push('/market')
      } catch (e) {}
    }

    const deleteData = async () => {
      try {
        await store.dispatch('deleteProduct', docRef)
        console.log('deleted', docRef)
        router.push('/market')
      } catch (e) {}
    }

    readData()
    return {
      readData,
      updateData,
      deleteData,
      product,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/components/button';
@import '../../../assets/scss/components/form';
@import '../../../assets/scss/components/modal';
</style>
