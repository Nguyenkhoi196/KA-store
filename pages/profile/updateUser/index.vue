<template>
  <div class="h-screen bg-primary p-2 sm:p-2">
    <form @submit.prevent="submit">
      <div class="">
        <div class="border-b border-gray-900/10 pb-6">
          <h2
            class="text-lg text-center font-semibold leading-7 text-secondary"
          >
            Profile
            <div>
              <p v-if="user" class="font-mono text-tertiary">
                {{ user.providerData[0].uid }}
              </p>
            </div>
          </h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="">
              <label
                for="username"
                class="block text-sm font-medium leading-6 text-secondary"
                >Username</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <input
                    v-model="name"
                    id="username"
                    type="text"
                    name="username"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-secondary placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="userName"
                  />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="about"
                class="block text-sm font-medium leading-6 text-secondary"
                >About</label
              >
              <div class="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="block w-full rounded-md border-0 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                />
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>

            <div class="col-span-full">
              <label
                for="photo"
                class="block text-sm font-medium leading-6 text-secondary"
                >Photo</label
              >
              <div class="mt-2 flex flex-col items-center gap-5">
                <!-- <img v-if="photoUrl" :src="photoUrl" class="w-40" /> -->
                <fa :icon="['fas', 'user']" class="w-40" />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-secondary"
                >Upload photo</label
              >
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-blue-900/25 px-6 py-10"
              >
                <div class="text-center">
                  <fa :icon="['fas', 'camera']" class="w-40" />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-tertiary"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-black hover:text-tertiary"
        >
          <nuxt-link to="/profile"> Cancel </nuxt-link>
        </button>
        <button
          type="submit"
          class="rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { getDatabase, ref as sRef, set, onValue } from 'firebase/database'
// import { onMounted } from 'vue';
import { ref, onMounted } from 'vue'

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
        user.value = userStr.value ? JSON.parse(userStr.value) : {}
        // Gán giá trị user.uid cho userUid
        userUid.value = user.value.uid
        // readUserData(userUid.value, getDatabase())
        // console.log('mounted userUid', userUid.value.name);

      }
    })

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
        console.log('Read data:', data)
      })
    }
    return {
      user,
      submit,
      name,
    }
  }
}
</script>
