<template>
  <div class="bg-primary h-screen p-2 gap-4">
    <button
    class="button-icon text-tertiary"
    @click="goBack"
    >
    <fa :icon="['fas', 'angle-left']" />
    {{ product.name }}</button>
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
                  value="{name}"
                  type="text"
                  name="name"
                  class="form-input w-full"
                  :placeholder="product.name"
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
                  class="form-input w-full"
                  :placeholder=" product.brand"
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
                  class="form-input w-full"
                  :placeholder="product.price"
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
                  class="form-input w-full"
                >
                  <option :selected="product.category"> {{ product.category }}</option>
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
                  class="form-input w-full"
                  :placeholder="product.inventory"
                  required
                  type="number"
                ></input>
              </div>
            </div>
            <button
            type="submit"
              class="form-input text-secondary"
            >
              Update new product
            </button>
    </form>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from '@nuxtjs/composition-api'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

export default {
  layout: 'AuthLayout',
  setup() {
    const product = ref('')
    const route = useRoute()
    const router = useRouter()
    const productId = route.value.params.id
    const goBack = () => {
      router.back()
    }
    const readData = async () => {
      const fs = getFirestore()
      const docRef = doc(fs, 'products', productId)
      const productSnapshot = await getDoc(docRef)
      const productData = productSnapshot.data()
      console.log(productData);
      product.value = productData
    };
    console.log(product.value);
      readData();
    return {
      readData,
      goBack,
      product
    }
  },
}
</script>

<style lang="scss">
@import '../../../assets/scss/components/button';
@import '../../../assets/scss/components/modal'
</style>
