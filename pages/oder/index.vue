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
import {
  Database,
  getDatabase,
  onValue,
  ref as sRef,
  set,
} from 'firebase/database'
// import { onMounted } from 'vue';
import { ref, onMounted, onUpdated } from 'vue'

export default {
  setup() {
    const user = ref<any>('')
    const userStr = ref<any>('')
    const name = ref<string>('')
    const imageUrl = ref<string>('')
    const userUid = ref<string>('')

    // Lấy thông tin người dùng từ localStorage khi component được khởi tạo trên client
    onMounted(() => {
      if (process.client) {
        userStr.value = localStorage.getItem('user')
        console.log(userStr.value)

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
        // Kiểm tra và gán giá trị cho name.value
        const nameValue = name.value ? name.value : ''
        // Kiểm tra và gán giá trị cho imageUrl.value
        const imageUrlValue = imageUrl.value ? imageUrl.value : ''
        // Gọi hàm writeUserData với các đối số cần thiết
        await writeUserData(userUid.value, nameValue, imageUrlValue, db)
      } catch (error) {
        console.error('Error writing data: ', error)
      }
    }

    const writeUserData = async (userUid, name, imageUrl, db) => {
      // Tạo đường dẫn đến nút trong Realtime Database dạng 'users/uid'
      const dbPath = `users/${userUid}`
      // Lưu dữ liệu vào Realtime Database
      await set(sRef(db, dbPath), {
        userUid,
        name, // Sử dụng giá trị đã kiểm tra của biến name
        profile_picture: imageUrl, // Sử dụng giá trị đã kiểm tra của biến imageUrl
      })
      console.log('Data has been written successfully')
      console.log(name)
    }
    const readUserData = async (userUid, db) => {
      // Tạo đường dẫn đến nút trong Realtime Database dạng 'users/uid'
      const dbPath = `users/${userUid}`
      // Sử dụng hàm onValue để lắng nghe sự thay đổi dữ liệu tại đường dẫn đã chỉ định
      await onValue(sRef(db, dbPath), (snapshot) => {
        // Lấy dữ liệu từ snapshot
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
