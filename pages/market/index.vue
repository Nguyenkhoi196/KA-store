<script lang="ts">
import { ref } from 'vue';
// import { onMounted } from 'vue'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ModalProduct from '~/components/Modal.vue';

export default {
  components: { ModalProduct } ,
  setup() {
    const isModalVisible = ref(true); // Sử dụng ref để gắn biến reactive
    const showModal = () => {
      isModalVisible.value = !isModalVisible.value; // Truy cập giá trị của ref thông qua .value
    }

    return {
      showModal,
      isModalVisible
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

<template>
  <div>
    <!-- Modal toggle -->
    <div class="flex justify-center m-5">
      <button
      id="defaultModalButton"
        data-modal-toggle="defaultModal"
        class="block text-primary bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        @click="showModal"
      >
        Create product
      </button>
    </div>

    <!-- Main modal -->
    <ModalProduct v-show="isModalVisible"/>
  </div>
</template>
