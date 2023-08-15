<template>
  <div class>
    <section class="container mx-auto">
      <section class="w-full flex">
        <section class="max-w-[234px] min-w-[200px] h-auto mr-8 mb-8 mt-6">
          <h1 class="text-4xl font-bold pb-6 items-center">
            <span> Hàng hóa </span>
          </h1>
          <section>
            <article class="relative bg-primary mb-4 p-3 shadow-md rounded-md">
              box1
            </article>
          </section>
        </section>
        <section class="grow min-w-[468px] min-h-[400px] relative mb-5">
          <div class="mt-6 min-h-[inherit] w-full bg-primary relative">
            <article class="flex mt-0 items-baseline min-h-[54px]">
              <div class="grow shrink items-center flex">
                <div
                  class="max-w-[450px] min-w-[200px] mr-4 rounded relative grow py-1 px-2 flex-wrap items-stretch flex focus:shadow-xl"
                >
                  <span class="absolute self-center left-4">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập mặt hàng"
                    class="flex-auto relative float-left pl-10 mb-0 z-[2] focus:outline-dotted focus:ring-none border-none bg-transparent rounded-lg"
                  />
                </div>
                <aside class="flex self-center">
                  <div
                    data-dropdown-toggle="dropdown-add"
                    data-dropdown-trigger="click"
                    class="button flex gap-1 text-primary bg-secondary"
                  >
                    <span>
                      <svg
                        class="w-3 h-3 text-current dark:text-tertiary"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </span>
                    <p class="pl-3">Thêm mới</p>
                    <span>
                      <svg
                        class="w-3 h-3 text-current dark:text-tertiary"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </span>
                  </div>
                  <!-- dropdown-menu -->
                  <div
                    id="dropdown-add"
                    class="hidden divide-y divide-gray-100 bg-secondary/70 text-sm z-10 rounded-lg"
                  >
                    <ul class="py-2">
                      <li
                        data-modal-toggle="modal-1"
                        data-modal-backdrop="false"
                        class="cursor-pointer flex items-center gap-1 px-3 py-1 text-primary hover:bg-secondary"
                      >
                        <span>
                          <svg
                            class="w-3 h-3 text-current dark:text-tertiary"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </span>
                        <span class="pl-3"> Thêm hàng hóa </span>
                      </li>
                      <li
                        class="cursor-pointer flex items-center gap-1 px-3 py-1 text-primary hover:bg-secondary"
                      >
                        <span>
                          <svg
                            class="w-3 h-3 text-current dark:text-tertiary"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </span>
                        <span class="pl-3"> Thêm Dịch vụ </span>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </article>
          </div>
        </section>
      </section>
    </section>
    <Modal :id="1" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
// import { Product } from '~/types/Product'
import repositories from '~/plugins/repositories'

// const products = ref<Product[]>()

if (process.client) {
  repositories.user
    .all()
    .then((response: any) => {
      // products.value = response.data.data
      console.log(response)
    })
    .catch((error: any) => {
      console.log(error)
    })
}
</script>
<script lang="ts">
export default {
  layout: 'DefaultLayout',
}
</script>
<style lang="scss" scoped></style>
