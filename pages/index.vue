<template>
  <div>
    <template v-if="fetchState.pending"><load-data /></template>
    <template v-else>
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
            <!-- <NuxtLink :href="homepage?.hero_banner?.button?.link" class=" text-primary mt-4 hover:text-green-700 active:text-green-400 inline-flex items-center w-fit
            bg-secondary/75 hover:bg-secondary/50 font-medium rounded-lg text-sm py-2 px-3 border-px border-secondary
            text-center">
              <fa icon="plus" />
              {{ homepage?.hero_banner?.button?.link }}
              <span class="pl-2"> {{ homepage?.hero_banner?.button?.text }} </span>
            </NuxtLink> -->
          </div>
        </div>
        <div class="mx-auto">
          <picture>
            <img :src="homepage?.hero_banner?.image.url" alt="" class="max-w-xl h-auto w-full" />
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
            <!-- <NuxtLink
              :to="homepage?.section_1?.button.link"
              class="text-primary mt-4 hover:text-green-700 active:text-green-400 inline-flex items-center w-fit bg-secondary/75 hover:bg-secondary/50 font-medium rounded-lg text-sm py-2 px-3 border-px border-secondary text-center"
            >
              <fa icon="plus" />
              <span class="pl-2"> {{ homepage?.section_1?.button.text }} </span>
            </NuxtLink> -->
          </div>
        </div>
        <div class="mx-auto">
          <picture>
            <img :src="homepage?.section_1?.image.url" alt="" class="max-w-xl h-auto w-full" />
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
            class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded">
            <div class="">
              <div class="group-hover:scale-110 w-full h-60 bg-inherit duration-500">
                <img class="w-full h-auto overflow-hidden rounded"
                  src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700934899/KhoiAnh/img-page/hltjyyp2sxsckhzeaesv.jpg"
                  alt="" />
              </div>
              <div
                class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100">
                Tôn Việt Nhật
              </div>
              <div class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16">
                <div
                  class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900">
                </div>
                <span class="text-xl text-secondary font-bold">Tôn Việt Nhật</span>
                <a class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div
            class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded">
            <div class="">
              <div class="group-hover:scale-110 w-full h-60 bg-inherit duration-500">
                <img class="w-full h-auto overflow-hidden rounded"
                  src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700935643/KhoiAnh/img-page/xqvpwotba2qmc6jrxltn.png"
                  alt="" />
              </div>
              <div
                class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100">
                Tôn Vitek
              </div>
              <div class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16">
                <div
                  class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900">
                </div>
                <span class="text-xl text-secondary font-bold">Tôn Vitek</span>
                <a class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div
            class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded">
            <div class="">
              <div class="group-hover:scale-110 w-full h-60 bg-inherit duration-500">
                <img class="w-full h-auto overflow-hidden rounded"
                  src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700935753/KhoiAnh/img-page/lyxj4kotehzsqjw48fhg.png"
                  alt="" />
              </div>

              <div
                class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100">
                Tôn Nam Kim
              </div>
              <div class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16">
                <div
                  class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900">
                </div>
                <span class="text-xl text-secondary font-bold">Tôn Nam Kim</span>
                <a class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div
            class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded">
            <div class="">
              <div class="group-hover:scale-110 w-full h-60 bg-inherit duration-500">
                <img class="w-full h-auto overflow-hidden rounded"
                  src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700936799/KhoiAnh/img-page/yt9mkhumr5ap6xqkpxsf.jpg"
                  alt="" />
              </div>

              <div
                class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100">
                Ống hộp mạ kẽm
              </div>
              <div class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16">
                <div
                  class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900">
                </div>
                <span class="text-xl text-secondary font-bold">Ống hộp mạ kẽm</span>
                <a class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div
            class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded">
            <div class="">
              <div class="group-hover:scale-110 w-full h-60 bg-inherit duration-500">
                <img class="w-full h-auto overflow-hidden rounded"
                  src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700936870/KhoiAnh/img-page/g29zuxg77mfefbb3jnpt.jpg"
                  alt="" />
              </div>

              <div
                class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100">
                Ống trụ mạ kẽm
              </div>
              <div class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16">
                <div
                  class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900">
                </div>
                <span class="text-xl text-secondary font-bold">Ống trụ mạ kẽm</span>
                <a class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div
            class="product-card relative group cursor-pointer overflow-hidden duration-500 w-64 h-[20rem] bg-white shadow-card hover:shadow-lg text-gray-50 p-5 rounded">
            <div class="">
              <div class="group-hover:scale-110 w-full h-60 bg-inherit duration-500">
                <img class="w-full h-auto overflow-hidden rounded"
                  src="https://res.cloudinary.com/dat9zyjdy/image/upload/v1700936882/KhoiAnh/img-page/dtztq6zztoimxobcjrq7.jpg"
                  alt="" />
              </div>

              <div
                class="absolute bottom-3 pb-2 w-64 left-0 text-gray/800 group-hover:hidden text-3xl font-semibold flex justify-center text-gray-800 duration-100">
                Thép V mạ
              </div>
              <div class="absolute flex flex-col w-56 left-0 p-5 -bottom-[76px] duration-500 group-hover:-translate-y-16">
                <div
                  class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900">
                </div>
                <span class="text-xl text-secondary font-bold">Sắt U-I-V</span>
                <a class="group-hover:opacity-100 w-56 duration-500 opacity-0 py-2 hover:text-secondary underline">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useFetch } from '@nuxtjs/composition-api'
import { ref } from 'vue'
import { getHomepage } from '~/api/Page'
type Homepage = {
  herro_banner: object
}
const homepage = ref<Homepage>()
const { fetch, fetchState } = useFetch(async () => {
  const { data } = await getHomepage()
  homepage.value = data.data
})
fetch()
</script>
<script lang="ts">
export default {
  layout: 'DefaultLayout',
  loading: true,
  middleware: 'auth',
}
</script>
