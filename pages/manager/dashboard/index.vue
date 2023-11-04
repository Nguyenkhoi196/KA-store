<template>
  <div>
    <section class="container mx-auto min-h-screen h-full">
      <section class="w-auto mx-8 flex flex-col">
        <section class="mt-6">
          <button
            id="button-sidebar"
            type="button"
            class="text-4xl font-bold pb-6 items-center flex -translate-x-[10%]"
          >
            <fa class="icon text-base self-center" icon="angles-left" />
            <span class="pl-2"> Thống kê </span>
          </button>
        </section>
        <section class="flex">
          <div id="statistics" class="shadow-xl"></div>
          <div id="chart-dashboard shadow-xl">
            <client-only placeholder="Loading...">
              <Chart-KABar />
              <Chart-KALine />
            </client-only>
          </div>
        </section>

        <SidebarLeftDrawer :sidebar="'sidebar'" />
        <div class="relative w-fit text-secondary">
          <fa icon="square" class="h-auto rotate-[70deg]" style="width: 3rem" />
          <div
            class="absolute z-10 top-[-20%] left-1/3 bg-green-50 rounded-full border-4 border-white border-solid"
          >
            <fa
              icon="star"
              class="h-auto p-2"
              style="width: 2rem; height: 2rem"
            />
          </div>
        </div>
        <div class="relative w-fit text-danger">
          <fa icon="square" class="h-auto rotate-[70deg]" style="width: 3rem" />
          <div
            class="absolute z-10 top-[-20%] left-1/3 bg-red-50 rounded-full border-4 border-white border-solid"
          >
            <fa icon="x" class="h-auto p-2" style="width: 2rem; height: 2rem" />
          </div>
        </div>
        <div class="relative w-fit text-warning">
          <fa icon="square" class="h-auto rotate-[70deg]" style="width: 3rem" />
          <div
            class="absolute z-10 top-[-20%] left-1/3 bg-orange-50 rounded-full border-4 border-white border-solid"
          >
            <fa
              icon="pause"
              class="h-auto p-2"
              style="width: 2rem; height: 2rem"
            />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
