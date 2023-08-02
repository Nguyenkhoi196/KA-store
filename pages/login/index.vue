<template>
  <div>
    <div
      class="flex flex-row items-center justify-between h-screen gap-10 px-40 pt-20"
    >
      <!-- <video
        autoplay
        loop
        playsinline
        class="absolute block object-cover w-1/2 h-1/2"
      >
        <source src="../../assets/images/video_login.mp4" type="video/mp4" />
      </video> -->

      <div class="container mx-auto px-8">
        <!-- ở đây -->
        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <div class="relative">
            <input
              id="emailInput"
              v-model="email"
              autocomplete="off"
              type="email"
              class="form-input peer"
              placeholder="Email"
            />
            <label for="emailInput" class="form-label">Email </label>
          </div>
          <div class="relative">
            <input
              id="passwordInput"
              v-model="password"
              autocomplete="off"
              type="password"
              class="form-input peer"
              placeholder="Mật khẩu"
            />
            <label for="passwordInput" class="form-label">Mật khẩu </label>
          </div>
          <div class="flex flex-col gap-4 text-center">
            <button class="form-button" type="submit">Đăng nhập</button>

            <!--Forgot password link-->
            <a href="#!">Quên mật khẩu?</a>
          </div>
        </form>
        <!-- Start-err -->
        <div v-if="error" class="text-left text-yellow mt-4">
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">{{ error }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
          </div>
        </div>
        <!-- Star--direction -->

        <div class="w-full text-center mt-6">
          <span class="font-semibold"> Bạn chưa có tài khoản ? </span>
          <span class="ml-1 font-extrabold">
            <nuxt-link to="/signup">Đăng ký</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { store } from '../../store'

export default {
  layout: 'DefaultLayout',
  transition: 'slide-left',
  setup() {
    const email = ref(null)
    const password = ref(null)
    const isPending = ref(false)
    const error = ref('')
    const router = useRouter()

    watch([email, password], () => {
      error.value = ''
    })

    const onSubmit = async () => {
      try {
        await store.dispatch('login', {
          identifier: email.value,
          password: password.value,
        })
      } catch (e) {
        error.value = e.message
      }
      if (!error.value) {
        console.log(JSON.parse(localStorage.getItem('roles')))
        if (JSON.parse(localStorage.getItem('roles')) === 'Admin') {
          router.push('/market')
        } else {
          router.push('/profile')
        }
      }
    }

    // const onSubmit = async () => {
    //   try {
    //     const res = await axios.post('http://localhost:1337/api/auth/local', {
    //       identifier: email.value,
    //       password: password.value,
    //     })
    //     console.log(res)
    //     return res.data
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    //   if (!error.value) {
    //     router.push('/market')
    //   }
    // }
    // onSubmit().then((params) => {
    //   res = await axios.post('http://localhost:1337/api/users/me')
    //   console.log(params.jwt)
    // })

    return {
      email,
      password,
      error,
      onSubmit,
      isPending,
    }
  },
}
</script>
<style lang="scss" scoped></style>
