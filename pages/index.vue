<template>
  <div>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-fit overflow-hidden rounded-lg md:h-[450px]">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1699931681/hoola/home-page/solution-2.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1699417503/hoola/home-page/hero-banner.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1699931681/hoola/home-page/solution-2.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1699417503/hoola/home-page/hero-banner.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1699931681/hoola/home-page/solution-2.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/40 dark:bg-gray-800/30 group-hover:bg-secondary/70 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-secondary dark:text-gray-800 rtl:rotate-180 group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/40 dark:bg-gray-800/30 group-hover:bg-secondary/70 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-secondary dark:text-gray-800 rtl:rotate-180 group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    <template v-if="$fetchState.pending">loading page</template>
    <template v-else>
      <div>
        <section class="container mx-auto grid grid-cols-2 py-20">
          <div class="max-w-xl">
            <div class="flex h-full flex-col justify-center text-justify">
              <h2 class="text-4xl font-semibold text-secondary uppercase pb-4">
                {{ homepage?.hero_banner?.heading }}
              </h2>
              <hr />
              <p class="text-base text-gray-800 pt-4">
                {{ homepage?.hero_banner?.description }}
              </p>
            </div>
          </div>
          <div class="mx-auto">
            <picture>
              <img
                :src="homepage?.hero_banner?.image.url"
                alt=""
                class="max-w-xl h-auto"
              />
            </picture>
          </div>
        </section>
        <section class="container mx-auto grid grid-cols-2 py-20">
          <div class="max-w-xl order-last">
            <div class="flex flex-col h-full justify-center text-justify">
              <h2 class="text-4xl font-semibold text-secondary pb-4">
                {{ homepage?.section_1?.heading }}
              </h2>
              <hr />
              <p class="text-base text-gray-800 pt-4">
                {{ homepage?.section_1?.description }}
              </p>
            </div>
          </div>
          <div class="mx-auto">
            <picture>
              <img
                :src="homepage?.section_1?.image.url"
                alt=""
                class="max-w-xl h-auto"
              />
            </picture>
          </div>
        </section>
        <section class="container mx-auto grid grid-flow-row py-20 gap-20">
          <div class="flex justify-center h-auto">
            <h2 class="text-4xl text-secondary font-semibold text-center">
              Sản phẩm nổi bật
            </h2>
          </div>
          <div class="container grid grid-cols-3 pt-10 gap-10 w-fit mx-auto">
            <div
              class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded"
            >
              <div class="">
                <div
                  class="group-hover:scale-110 w-full h-60 bg-inherit duration-500"
                >
                  <img
                    class="w-full h-auto overflow-hidden rounded"
                    src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700934899/KhoiAnh/img-page/hltjyyp2sxsckhzeaesv.jpg"
                    alt=""
                  />
                </div>
                <div
                  class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100"
                >
                  Tôn Việt Nhật
                </div>
                <div
                  class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16"
                >
                  <div
                    class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
                  ></div>
                  <span class="text-xl text-secondary font-bold"
                    >Tôn Việt Nhật</span
                  >
                  <a
                    class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div
              class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded"
            >
              <div class="">
                <div
                  class="group-hover:scale-110 w-full h-60 bg-inherit duration-500"
                >
                  <img
                    class="w-full h-auto overflow-hidden rounded"
                    src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700935643/KhoiAnh/img-page/xqvpwotba2qmc6jrxltn.png"
                    alt=""
                  />
                </div>
                <div
                  class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100"
                >
                  Tôn Vitek
                </div>
                <div
                  class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16"
                >
                  <div
                    class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
                  ></div>
                  <span class="text-xl text-secondary font-bold"
                    >Tôn Vitek</span
                  >
                  <a
                    class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div
              class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded"
            >
              <div class="">
                <div
                  class="group-hover:scale-110 w-full h-60 bg-inherit duration-500"
                >
                  <img
                    class="w-full h-auto overflow-hidden rounded"
                    src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700935753/KhoiAnh/img-page/lyxj4kotehzsqjw48fhg.png"
                    alt=""
                  />
                </div>

                <div
                  class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100"
                >
                  Tôn Nam Kim
                </div>
                <div
                  class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16"
                >
                  <div
                    class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
                  ></div>
                  <span class="text-xl text-secondary font-bold"
                    >Tôn Nam Kim</span
                  >
                  <a
                    class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div
              class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded"
            >
              <div class="">
                <div
                  class="group-hover:scale-110 w-full h-60 bg-inherit duration-500"
                >
                  <img
                    class="w-full h-auto overflow-hidden rounded"
                    src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700936799/KhoiAnh/img-page/yt9mkhumr5ap6xqkpxsf.jpg"
                    alt=""
                  />
                </div>

                <div
                  class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100"
                >
                  Ống hộp mạ kẽm
                </div>
                <div
                  class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16"
                >
                  <div
                    class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
                  ></div>
                  <span class="text-xl text-secondary font-bold"
                    >Ống hộp mạ kẽm</span
                  >
                  <a
                    class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div
              class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded"
            >
              <div class="">
                <div
                  class="group-hover:scale-110 w-full h-60 bg-inherit duration-500"
                >
                  <img
                    class="w-full h-auto overflow-hidden rounded"
                    src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700936870/KhoiAnh/img-page/g29zuxg77mfefbb3jnpt.jpg"
                    alt=""
                  />
                </div>

                <div
                  class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100"
                >
                  Ống trụ mạ kẽm
                </div>
                <div
                  class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16"
                >
                  <div
                    class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
                  ></div>
                  <span class="text-xl text-secondary font-bold"
                    >Ống trụ mạ kẽm</span
                  >
                  <a
                    class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div
              class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded"
            >
              <div class="">
                <div
                  class="group-hover:scale-110 w-full h-60 bg-inherit duration-500"
                >
                  <img
                    class="w-full h-auto overflow-hidden rounded"
                    src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700936882/KhoiAnh/img-page/dtztq6zztoimxobcjrq7.jpg"
                    alt=""
                  />
                </div>

                <div
                  class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100"
                >
                  Thép V mạ
                </div>
                <div
                  class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16"
                >
                  <div
                    class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
                  ></div>
                  <span class="text-xl text-secondary font-bold"
                    >Sắt U-I-V</span
                  >
                  <a
                    class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useFetch } from '@nuxtjs/composition-api'
import { onMounted, ref } from 'vue'
import socketIOClient from 'socket.io-client'
import { getHomepage } from '~/api/Page'
import useStorage from '~/composables/useStorage'

// import { axios } from '~/plugins/axios'
const homepage = ref()
useFetch(async () => {
  const res = await getHomepage()
  homepage.value = res.data.data
})
onMounted(() => {
  socket.emit('connection', socket)
})
const socket = socketIOClient('http://localhost:1337', {
  query: {
    token: useStorage.getTokenFromStorage(),
  },
})
socket.on('text', (abc) => {
  console.log('text', abc)
})
// socket.on('ping', () => {
//   socket.emit('pong', JSON.stringify({ msg: 'pong' }))
// })

// const handleGetHomapage = async () => {
//   await getHomepage()
// }
</script>
<script lang="ts">
export default {
  layout: 'DefaultLayout',
  loading: true,
}
</script>
