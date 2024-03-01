<template>
  <div class="bg-secondary/10">
    <section class=" mx-auto min-h-screen h-full">
      <section class="w-auto mx-8 flex flex-col">
        <section class="mt-6">
          <button id="button-sidebar" type="button" class="text-4xl font-bold pb-6 items-center flex -translate-x-[10%]">
            <fa class="icon text-base self-center" icon="angles-left" />
            <span class="pl-2"> Thống kê </span>
          </button>
        </section>
        <section class="flex flex-col gap-5">
          <div class="p-4 shadow-xl rounded-xl bg-white">
            <h2 class="text-2xl font-semibold pb-4 uppercase">
              Kết quả bán hàng hôm nay
            </h2>
            <div id="statistics" class="grid grid-cols-3 p-4 gap-10">
              <div class="dash col-span-1 feedback-icon flex gap-5 text-secondary">
                <div class="relative w-fit">
                  <fa icon="square" class="square h-auto rotate-[70deg]" style="width: 3rem" />
                  <div
                    class="circle absolute z-10 top-[-20%] left-1/3 bg-green-50 rounded-full border-4 border-white border-solid">
                    <fa icon="star" class="p-2" style="width: 2rem; height: 2rem" />
                  </div>
                </div>
                <div class="grid grid-flow-col-dense grid-cols-2 grid-rows-2">
                  <span class="text-inherit text-4xl font-bold pb-1 col-span-1">
                    100
                  </span>
                  <span class="text-secondary/60 col-span-1">Đơn hàng</span>
                  <span class="text-xxl font-bold self-center">Thành công</span>
                </div>
              </div>

              <div class="cancel col-span-1 feedback-icon flex gap-5 text-danger">
                <div class="relative w-fit">
                  <fa icon="square" class="square h-auto rotate-[70deg]" style="width: 3rem" />
                  <div
                    class="circle absolute z-10 top-[-20%] left-1/3 bg-red-50 rounded-full border-4 border-white border-solid">
                    <fa icon="x" class="p-2" style="width: 2rem; height: 2rem" />
                  </div>
                </div>
                <div class="grid grid-flow-col-dense grid-cols-2 grid-rows-2">
                  <span class="text-inherit text-4xl font-bold pb-1">
                    100
                  </span>
                  <span class="text-danger/60">Đơn hàng</span>
                  <span class="text-xxl font-bold self-center">Bị hủy</span>
                </div>
              </div>

              <div class="return col-span-1 feedback-icon flex gap-5 text-warning">
                <div class="relative w-fit">
                  <fa icon="square" class="square h-auto rotate-[70deg]" style="width: 3rem" />
                  <div
                    class="circle absolute z-10 top-[-20%] left-1/3 bg-orange-50 rounded-full border-4 border-white border-solid">
                    <fa icon="pause" class="h-auto p-2" style="width: 2rem; height: 2rem" />
                  </div>
                </div>
                <div class="grid grid-flow-col-dense grid-cols-2 grid-rows-2">
                  <span class="text-inherit text-4xl font-bold pb-1">
                    100
                  </span>
                  <span class="text-warning/60">Đơn hàng</span>
                  <span class="text-xxl font-bold self-center">Trả hàng</span>
                </div>
              </div>
            </div>
          </div>
          <div id="chart-dashboard " class="grid grid-flow-row grid-cols-3 gap-5">
            <client-only placeholder="Loading...">
              <chart-ka-bar class="shadow-xl rounded-xl col-span-2 p-4 bg-white" />
              <chart-ka-pie class="shadow-xl rounded-xl p-4 bg-white" />
            </client-only>
          </div>
        </section>

        <sidebar-left-drawer :sidebar="'sidebar'" />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
