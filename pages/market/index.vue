<script>
import { getFirestore, collection, getDocs, query, getDoc } from 'firebase/firestore'

export default {
  async mounted() {
    try {
      const db = getFirestore()

      // Lấy tất cả các collection trong Firestore
      const collectionsSnapshot = await getDocs(collection(db, 'product'))
      collectionsSnapshot.forEach(async (collectionDoc) => {
        const collectionId = collectionDoc.id
        console.log('Collection:', collectionId)

        // Lấy tất cả các document trong collection hiện tại
        const documentsSnapshot = await getDocs(collection(db, collectionId))
        const data = [];
        documentsSnapshot.forEach((doc) => {
          const docId = doc.id
          const docData = doc.data()
          data.push(...docData, docId)
        })
        console.log(data);
      })

    } catch (e) {
      console.error('Lỗi khi lấy dữ liệu từ Firestore:', e)
    }
  }
}
</script>
<template>
  <div>

  </div>
</template>
