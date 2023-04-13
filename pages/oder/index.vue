<template>
  <div>
    <div>
      <p v-if="user" class="font-mono text-blue-600">
        {{ email.providerData[0].uid }}
      </p>
    </div>
    <form action="" @submit.prevent="submit">
      <input v-model="name" type="text" placeholder="name" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { getDatabase, ref as sRef, set } from 'firebase/database'
// import { onMounted } from 'vue';
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const email = ref<string>('')
    const emailStr: any = ref('')
    const name = ref<string>('')
    const imageUrl = 'your_imageUrl1'

    if (process.client) {
    emailStr.value = localStorage.getItem('user')
    email.value = emailStr.value ? JSON.parse(emailStr.value) : {}
    console.log(JSON.parse(emailStr.value));
    console.log(email.value)

    }
    const submit = async () => {
      try {
        const db = getDatabase()
        await set(sRef(db, 'users/' + name.value), {
          name,
          profile_picture: imageUrl,
        })
        console.log('Data has been written successfully')
        console.log(name.value)
      } catch (error) {
        console.error('Error writing data: ', error)
      }
    }
    return {
      submit,
      name,
      email
    }
  },
}
</script>

<style lang="scss" scoped></style>
