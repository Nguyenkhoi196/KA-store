<!-- <script>
export default {
  setup() {
    async fetch() {
      // Lấy dữ liệu từ Firestore
      const snapshot = await this.$fire.firestore.collection('user').get()
      const items = snapshot.docs.map(doc => doc.data())
      console.log(items)

  }
  },
}
</script> -->
