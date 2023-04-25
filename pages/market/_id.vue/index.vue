<template>
  <div class="bg-secondary h-screen">
    <form @submit.prevent="submit">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Name</label
                >
                <input
                  id="name"
                  v-model="name"
                  value="{name}"
                  type="text"
                  name="name"
                  class="bg-primary text-secondary text-sm rounded-lg focus:ring-primary block w-full p-2.5"
                  :placeholder="product.name"
                  required

                />
              </div>
              <div>
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Brand</label
                >
                <input
                  id="brand"
                  v-model="brand"
                  type="text"
                  name="brand"
                  class="bg-primary text-secondary text-sm rounded-lg focus:ring-primary block w-full p-2.5"
                  :placeholder=" product.brand"
                  required
                />
              </div>
              <div>
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Price</label
                >
                <input
                  id="price"
                  v-model="price"
                  type="number"
                  name="price"
                  class="bg-primary text-secondary text-sm rounded-lg focus:ring-primary block w-full p-2.5"
                  :placeholder="product.price"
                  required
                  oninvalid=""
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Category</label
                >
                <select
                  id="category"
                  v-model="category"
                  required
                  class="bg-primary border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeholder-gray-400dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected=""> {{ product.category }}</option>
                  <option value="Sắt">Sắt</option>
                  <option value="Nhôm">Nhôm</option>
                  <option value="Tôn">Tôn</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="inventory"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Inventory</label
                >

                <input
                  id="inventory"
                  v-model="inventory"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-secondary bg-primary rounded-lg border border-grasecondarycus:ring-primary-500 focus:border-primary-500"
                  :placeholder="product.inventory"
                  required
                  type="number"
                ></input>
              </div>
            </div>
            <button
            type="submit"
              class="text-secondary hover:text-opacity-70 inline-flex items-center bg-transparent focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Update new product
            </button>
          </form>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from '@nuxtjs/composition-api'
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore'

export default {
  setup() {
    const product = ref('')
    const route = useRoute()
    const productId = route.value.params.id
    const readData = async () => {
      const fs = getFirestore()
      const docRef = doc(fs, 'products', productId)
      const productSnapshot = await getDoc(docRef)
      const productData = productSnapshot.data()
      console.log(productData);
      product.value = productData
    }
    console.log(product.value);
    readData()
    return {
      readData,
      product
    }
  },
}
</script>
