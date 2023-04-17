<template>
  <div>
    <div class="col-span-full">
      <label
        for="cover-photo"
        class="block text-sm font-medium leading-6 text-secondary"
      >
        Upload photo
      </label>
      <div
        class="mt-2 flex justify-center rounded-lg border border-dashed border-blue-900/25 px-6 py-10"
        @dragenter.prevent
        @dragover.prevent
        @dragleave.prevent
        @drop.prevent="onDrop"
        @change="previewImage"
      >
        <div class="text-center">
          <fa :icon="['fas', 'camera']" class="w-40" />
          <div class="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-tertiary"
            >
              <span>Upload a file</span>

              <nuxt-img :src="imageUrl" alt="" @load="previewImage" />
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                class="sr-only"
                accept="image/*"
                @change="readFile"
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
</template>

<script lang="ts">
import { ref } from 'vue'
import { User } from '~/types/User'

export default {
  name: 'UploadPhoto',
  setup() {
    const imageUrl = ref<User>('')
    const imageFile = ref<any>(null)
    const imagePreview = ref<any>(null)

    const readFile = (file: Blob) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        imagePreview.value = reader.result
        imageFile.value = file
        console.log(imageFile.value)
      }
    }
    const previewImage = (event: any) => {
      const file = event.target.files[0]
      readFile(file)
      event.target.value = null
      console.log('preview', file)
    }

    const onDrop = (event: any) => {
      const file = event.dataTransfer.files[0]
      readFile(file)
      imageUrl.value = file.name
      console.log('url', imageUrl.value)
    }
    // lưu ảnh vào storage
    // const uploadStorage = async (userUid, imageUrl, storage) => {
    //   console.log('down', imageUrl)
    //   // const storageRef = sRef(storage, `users/avatars/${userUid}/${imageUrl}`)
    //   await uploadBytes(sRef(storage, `users/avatars/${userUid}`)).then(
    //     (snapshot) => {
    //       console.log('Uploaded a blob or file!', snapshot.val())
    //     }
    //   )
    // }

    return {
      readFile,
      onDrop,
      previewImage,
      imageUrl,
      imageFile,
    }
  },
}
</script>

<style lang="scss" scoped></style>
