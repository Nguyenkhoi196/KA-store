<template>
  <div class="bg-tertiary h-screen after:contents after:opacity-50 after:top-0 after:left-0 after:z-10 after:w-full after:h-full">
    <!-- Modal toggle -->
    <div class="flex justify-center p-5">
      <button
      id="defaultModalButton"
        data-modal-toggle="defaultModal"
        class="block text-primary bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        @click="setShowModal(true)"
      >
        Create product
      </button>
    </div>

    <!-- Main modal -->
    <ModalProduct v-show="isModalVisible" :set-show-modal="setShowModal" :is-modal-visible="isModalVisible" class="relative z-50"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
// import { onMounted } from 'vue'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ModalProduct from '~/components/Modal.vue';

export default {
  components: { ModalProduct } ,
  layout: 'AuthLayout',
  transition: 'slide-left',
  setup() {
    const isModalVisible = ref(false); // Sử dụng ref để gắn biến reactive
    const setShowModal = (value: boolean) => {
      isModalVisible.value = value; // Truy cập giá trị của ref thông qua .value
    }
    return {
      setShowModal,
      isModalVisible,
    };
  },
};
</script>

<!-- //   async mounted() {
//     try {
//       const fs = getFirestore()

//       // Lấy tất cả các collection id trong Firestore
//       const collectionsSnapshot = await getDocs(collection(fs, 'product'))
//       collectionsSnapshot.forEach(async (collectionDoc) => {
//         const collectionId = collectionDoc.id
//         console.log('Collection:', collectionId)

//         // Lấy tất cả các document trong collection hiện tại
//         const documentsSnapshot = await getDocs(collection(fs, collectionId))
//         const data = []
//         documentsSnapshot.forEach((doc) => {
//           const docId = doc.id
//           const docData = doc.data().name
//           data.push(docData, docId)
//         })
//         console.log(data)
//       })
//     } catch (e) {
//       console.error('Lỗi khi lấy dữ liệu từ Firestore:', e)
//     }
//   }, -->
<style>
@import '~/assets/css/pageTransiton.css'
</style>
