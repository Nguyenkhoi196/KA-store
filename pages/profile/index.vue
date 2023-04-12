<template>
  <div>
    <div class="flex flex-col justify-between gap-10 bg-slate-100 mt-1 pb-14">
      <!-- header -->
      <div class="flex">
        <div class="p-2 mx-auto">
          <div class="text-center">
            <div class="w-24 h-24 overflow-hidden mx-auto border-2 rounded-md">
              Avatar
            </div>
          </div>
          <div
          class="font-semibold font-mono text-yellow mt-3 mx-auto border-2 p-2 bg-white rounded-md">
            <nuxt-link
            to="/profile/updateUser"

            >

              <div
                class="flex flex-row items-center text-yellow-600 gap-5 text-base"
              >
                <div class="flex flex-row gap-1 text-center">
                  <span class="col-span-1">
                    <fa :icon="['fas', 'shop']" />
                  </span>
                  <div class="col-span-2">
                    <p v-if="user" class="font-mono text-blue-600">
                      {{ user.providerData[0].uid }}
                    </p>
                  </div>
                </div>
                <span class="col-span-2">
                  <fa :icon="['fas', 'chevron-right']" />
                </span>
              </div>
            </nuxt-link>

          </div>
        </div>
      </div>
      <!-- page -->
      <div class="mx-2">
        <!-- option -->
        <div
          class="grid grid-cols-2 grid-flow-row justify-between gap-3 content-center mx-2"
        >
          <nuxt-link to="/market">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'bag-shopping']" />
                <h3 class="font-bold">Bán Hàng</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/oder">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'cart-shopping']" />
                <h3 class="font-bold">Đặt Hàng</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/returnOder">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'arrow-right']" />
                <h3 class="font-bold">Trả hàng</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'turn-down']" />
                <h3 class="font-bold">Nhập hàng</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'turn-up']" />
                <h3 class="font-bold">Trả hàng nhập</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'truck-fast']" />
                <h3 class="font-bold">Chuyển hàng</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'check-to-slot']" />
                <h3 class="font-bold">Kiểm kho</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'right-to-bracket']" />
                <h3 class="font-bold">Xuất hủy</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'user-group']" />
                <h3 class="font-bold">Khách hàng</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'users']" />
                <h3 class="font-bold">Nhà cung cấp</h3>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/update">
            <div class="mx-auto p-4 border-2 bg-white rounded-md">
              <div class="flex flex-row items-center gap-2 text-yellow-600">
                <fa :icon="['fas', 'person']" />
                <h3 class="font-bold">Nhân viên</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <!-- footer -->
        <div class="flex flex-col content-center mx-2 rounded-md text-base">
          <nuxt-link to="">
            <div class="flex flex-row gap-2 px-4 py-2">
              <span>
                <fa :icon="['fas', 'gear']" />
              </span>
              Cài Đặt
            </div>
          </nuxt-link>
          <nuxt-link to="">
            <div class="flex flex-row gap-2 px-4 py-2 border-t border-gray-200">
              <span>
                <fa :icon="['fas', 'phone']" />
              </span>
              Gọi <a class="text-blue-500">0915136016</a>
            </div>
          </nuxt-link>
          <nuxt-link to="">
            <div class="flex flex-row gap-2 px-4 py-2 border-t border-gray-200">
              <span>
                <fa :icon="['fas', 'circle-info']" />
              </span>
              Điều khoản
            </div>
          </nuxt-link>
          <button @click="logOut">
            <div
              class="flex flex-row gap-2 px-4 py-2 text-red-500 border-t border-gray-200"
            >
              <span>
                <fa :icon="['fas', 'right-to-bracket']" />
              </span>
              Đăng xuất
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- layout -->
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { store } from '../../store'

export default {
  layout: 'AuthLayout',
  setup() {
    const userStr: any = ref('')
    const user: any = ref('')
    const router = useRouter()
    const error = ref<any>('')

    onMounted(() => {
      if (process.browser) {
        userStr.value = localStorage.getItem('user')
        user.value = userStr.value ? JSON.parse(userStr.value) : {}
      }
    })
    const logOut = () => {
      try {
        store.dispatch('logout')
      } catch (e: any) {
        error.value = e.message
      }
      if (!error.value) {
        router.push('/login')
      }
    }

    return {
      user,
      logOut,
      error,
    }
  },
}
</script>
