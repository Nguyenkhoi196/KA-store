<template>
  <div class="bg-primary h-screen flex flex-col gap-4">
    <nuxt-link
      to="/market"
      class="button-icon text-tertiary bg-secondary h-16 text-xl font-medium flex flex-row justify-start items-center gap-1"
    >
      <fa :icon="['fas', 'angle-left']" />
      <p>
        {{ productName.name }}
      </p>
    </nuxt-link>

    <form class="m-4">
      <div class="modal-container" style="color: black">
        <div class="relative">
          <input
            id="name"
            v-model="product.name"
            type="text"
            name="name"
            class="form-input peer"
            style="border-bottom: 1px black solid"
            :placeholder="product.name"
          />
          <label for="name" class="form-label">Tên mặt hàng</label>
        </div>
        <div class="relative">
          <input
            id="brand"
            v-model="product.brand"
            type="text"
            name="brand"
            class="form-input peer"
            style="border-bottom: 1px black solid"
            :placeholder="product.brand"
          />
          <label for="brand" class="form-label">Thương hiệu</label>
        </div>
        <div class="relative">
          <input
            id="price"
            v-model="product.price"
            type="number"
            name="price"
            class="form-input peer"
            style="border-bottom: 1px black solid"
            :placeholder="product.price"
            oninvalid=""
          />
          <label for="price" class="form-label">Giá bán</label>
        </div>
        <div class="relative">
          <input
            id="category"
            v-model="product.category"
            class="form-input peer"
            style="border-bottom: 1px black solid"
            :placeholder="product.category"
            type="text"
          />
          <label for="category" class="form-label">Phân loại</label>
        </div>
        <div class="relative">
          <input
            id="inventory"
            v-model="product.inventory"
            class="form-input peer"
            style="border-bottom: 1px black solid"
            :placeholder="product.inventory"
            type="number"
          />
          <label for="inventory" class="form-label">Tồn kho</label>
        </div>
      </div>
      <div class="w-full flex flex-row gap-4 justify-end">
        <button
          type="button"
          class="form-button text-danger"
          style="color: red"
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
  setup() {
    const route = useRoute()
    const router = useRouter()

    const productName = ref('')
    const product = ref('')
    const productId = route.value.params.id
    const fs = getFirestore()
    const docRef = doc(fs, 'products', productId)

    const readData = async () => {
      const productSnapshot = await getDoc(docRef)
      const productData = productSnapshot.data()
      product.value = productData
      return productData
    }
    readData()
      .then((params) => {
        productName.value = params
      })
      .catch((e) => {
        console.log(e)
      })
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
        router.push('/market')
      } catch (e) {}
    }

    readData()
    return {
      readData,
      updateData,
      deleteData,
      productName,
      product,
    }
  },
}
</script>

<style lang="scss" scoped></style>
