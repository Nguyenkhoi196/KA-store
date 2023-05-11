<template>
  <div>
    <div>
      <p v-if="user" class="font-mono text-blue-600">
        {{ user.providerData[0].uid }}
      </p>
    </div>
    <form action="" @submit.prevent="submit">
      <input v-model="name" type="text" placeholder="name" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { getDatabase, onValue, ref as sRef, set } from 'firebase/database'
// import { onMounted } from 'vue';
import { ref, onMounted, onUpdated } from 'vue'

export default {
  setup() {
    const user = ref()
    const userStr = ref<any>()
    const name = ref<string>()
    const imageUrl = ref<string>()
    const userUid = ref()

    onMounted(() => {
      if (process.client) {
        userStr.value = localStorage.getItem('user')
        user.value = userStr.value ? JSON.parse(userStr.value) : {}
        // Gán giá trị user.uid cho userUid
        userUid.value = user.value.uid
        readUserData(user.value.phoneNumber, getDatabase())
        console.log(user.value.phoneNumber)
      }
    })
    onUpdated(() => {})

    const submit = async () => {
      try {
        const db = getDatabase()
        const nameValue = name.value ? name.value : ''
        const imageUrlValue = imageUrl.value ? imageUrl.value : ''
        await writeUserData(userUid.value, nameValue, imageUrlValue, db)
      } catch (error) {
        console.error('Error writing data: ', error)
      }
    }

    const writeUserData = async (userUid, name, imageUrl, db) => {
      const dbPath = `users/${userUid}`
      await set(sRef(db, dbPath), {
        userUid,
        name, // Sử dụng giá trị đã kiểm tra của biến name
        profile_picture: imageUrl, // Sử dụng giá trị đã kiểm tra của biến imageUrl
      })
    }
    const readUserData = async (userUid, db) => {
      const dbPath = `users/${userUid}`
      await onValue(sRef(db, dbPath), (snapshot) => {
        const data = snapshot.val()
        console.log('Read data:', data.name)
      })
    }
    return {
      user,
      submit,
      name,
    }
  },
}
</script>

<style lang="scss" scoped></style>
