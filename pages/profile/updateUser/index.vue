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
                    id="username"
                    v-model="name"
                    type="text"
                    name="username"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-secondary placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div class="">
              <label
                for="numberPhone"
                class="block text-sm font-medium leading-6 text-secondary"
                >Phone Number</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <input
                    id="numberPhone"
                    v-model="phoneNumber"
                    type="text"
                    name="numberPhone"
                    autocomplete="numberPhone"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-secondary placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
            <upload-photo />
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
import {
  getDatabase,
  ref as sRef,
  set,
  onValue,
} from 'firebase/database'
import {
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore'

import { ref, onMounted } from 'vue'
import { User } from '~/types/User'
import UploadPhoto from '~/components/UploadPhoto.vue'

export default {
  components: { UploadPhoto },
  setup() {
    const user = ref<any>('')
    const userStr = ref<any>('')
    const name = ref<User>('')
    const imageUrl = ref<User>('')
    const userUid = ref<User>('')
    const phoneNumber = ref<User>('')
    const db = getDatabase()
    const fs = getFirestore()

    // Lấy thông tin người dùng từ localStorage khi component được khởi tạo trên client
    onMounted(() => {
      if (process.client) {
        userStr.value = localStorage.getItem('user')
        user.value = userStr.value ? JSON.parse(userStr.value) : {}
        // Gán giá trị user.uid cho userUid để read database
        userUid.value = user.value.uid
        // readUserData(userUid.value, getDatabase())
        // downloadStorage(imageUrl.value, getStorage())
      }
    })

    const submit = async () => {
      try {
        // Kiểm tra và gán giá trị cho name.value
        const nameValue = name.value ? name.value : ''
        const phoneValue = phoneNumber.value ? phoneNumber.value : ''

        // Kiểm tra và gán giá trị cho imageUrl.value
        const imageUrlValue = imageUrl.value ? imageUrl.value : ''
        // Gọi hàm writeUserData với các đối số cần thiết
        await writeUserData(
          userUid.value,
          nameValue,
          phoneValue,
          imageUrlValue,
          db
        )
        console.log('write userUid into FS', userUid.value, nameValue, phoneValue)
        await writeUserDataIntoDB(userUid.value, nameValue, phoneValue, fs)
        console.log('write userUid into DB', userUid.value, nameValue);

      } catch (error) {
        console.error('Error writing data: ', error)
      }
    }

    const writeUserData = async (userUid, name, phoneNumber, imageUrl, db) => {
      // Tạo đường dẫn đến nút trong Realtime Database dạng 'users/uid'
      const dbPath = `users/${userUid}`
      // Lưu dữ liệu vào Realtime Database
      await set(sRef(db, dbPath), {
        userUid,
        name,
        phoneNumber,
        imageUrl,
      })
    }

    const writeUserDataIntoDB = async (userUid, name, phoneNumber, fs) => {
      try{
        const fsUser = collection(fs, 'user')
        console.log('collection',fsUser);
        const allUserInfor =  await addDoc(fsUser, {userUid, name, phoneNumber})
        console.log('addDoc',allUserInfor);
      }
      catch (e) {
        console.log(e);

      }
    }

    const readUserData = async (userUid, db) => {
      // Tạo đường dẫn đến nút trong Realtime Database dạng 'users/uid'
      const dbPath = `users/${userUid}`
      // Sử dụng hàm onValue để lắng nghe sự thay đổi dữ liệu tại đường dẫn đã chỉ định
      await onValue(sRef(db, dbPath), (snapshot) => {
        // Lấy dữ liệu từ snapshot
        const data = snapshot.val()
        console.log('data_name', data.name)
      })
    }


    return {
      user,
      name,
      phoneNumber,
      imageUrl,
      submit,
    }
  },
}
</script>
