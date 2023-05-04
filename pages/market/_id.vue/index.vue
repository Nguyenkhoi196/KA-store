<template>
  <div class="bg-primary h-screen p-2 gap-4">
    <button
    class="button-icon text-tertiary"
    @click="goBack"
    >
    <fa :icon="['fas', 'angle-left']" />
    {{ product.name }}</button>
    <form>
            <div class="modal-container">
              <div>
                <label
                  for="name"
                  class="modal-label"
                  >Tên mặt hàng</label
                >
                <input
                  id="name"
                  v-model="product.name"
                  value="{name}"
                  type="text"
                  name="name"
                  class="form-input placeholder-tertiary w-full"
                  :placeholder="product.name"
                ></input>
              </div>
              <div>
                <label
                  for="brand"
                  class="modal-label"
                  >Thương hiệu</label
                >
                <input
                  id="brand"
                  v-model="product.brand"
                  type="text"
                  name="brand"
                  class="form-input placeholder-tertiary w-full"
                  :placeholder=" product.brand"
                />
              </div>
              <div>
                <label
                  for="price"
                  class="modal-label"
                  >Giá bán</label
                >
                <input
                  id="price"
                  v-model="product.price"
                  type="number"
                  name="price"
                  class="form-input placeholder-tertiary w-full"
                  :placeholder="product.price"
                  oninvalid=""
                />
              </div>
              <div>
                <label
                  for="category"
                  class="modal-label"
                  >Phân loại</label
                >
                <input
                    id="category"
                    v-model="product.category"
                    class="form-input placeholder-tertiary w-full"
                    :placeholder="product.category"
                      type="text"
                  ></input>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="inventory"
                  class="modal-label"
                  >Tồn kho</label
                >

                <input
                  id="inventory"
                  v-model="product.inventory"
                  class="form-input placeholder-tertiary w-full"
                  :placeholder="product.inventory"
                  type="number"
                ></input>
              </div>
            </div>
            <div class="w-full flex flex-row gap-4 justify-end">
              <button
              type="button"
              class="form-button text-red-500 "
                @click="deleteData"
              >
              Xóa mặt hàng
              </button>
              <button
              type="submit"
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
import { getFirestore, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export default {
  layout: 'AuthLayout',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const product = ref('')
    const productId = route.value.params.id
    const fs = getFirestore()
    const docRef = doc(fs, 'products', productId)

    const goBack = () => {
      router.back()
    }

    const readData = async () => {
      const productSnapshot = await getDoc(docRef)
      const productData = productSnapshot.data()
      product.value = productData

    };

    const updateData = async () => {
      try {
        await updateDoc(docRef ,product.value)
        console.log('updated');
      }
      catch(e){
      }
    }


    const deleteData = async () => {
      try {
        await deleteDoc(docRef)
        console.log('deleted');
        router.push('/market')
      }
      catch(e){

      }
    }

    readData();
    return {
      readData,
      updateData,
      goBack,
      deleteData,
      product
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/components/button';
@import '../../../assets/scss/components/modal'
</style>
