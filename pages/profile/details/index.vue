<template>
  <div>
    <section class="container mx-auto min-h-screen h-full">
      <section class="w-auto mx-8">
        <div class="mr-8 mb-8 mt-6">
          <button
            id="button-sidebar"
            type="button"
            class="text-4xl font-bold pb-6 items-center flex -translate-x-[10%]"
          >
            <fa class="icon text-base self-center" icon="angles-left" />
            <span class="pl-2"> Thông tin </span>
          </button>
        </div>
      </section>
      <section class="flex justify-evenly">
        <section class="w-auto">
          <img src="../../../assets/images/logo.png" class="max-w-md w-auto" />
        </section>
        <section class="grid grid-cols-2 max-w-3xl h-fit">
          <div class="px-6">
            <div
              class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-28">Thương hiệu :</label>
              <div class="ml-14">test</div>
            </div>
          </div>
          <div class="px-6">
            <div
              class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-28">Thương hiệu :</label>
              <div class="ml-14">test</div>
            </div>
          </div>
          <div class="px-6">
            <div
              class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-28">Thương hiệu :</label>
              <div class="ml-14">test</div>
            </div>
          </div>
          <div class="px-6">
            <div
              class="flex pt-4 pb-2 min-h-[24px] border-b-[1px] border-dashed border-gray-500"
            >
              <label class="w-28">Thương hiệu :</label>
              <div class="ml-14">test</div>
            </div>
          </div>
        </section>
      </section>
    </section>
    <SidebarLeftDrawer :sidebar="'sidebar'" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#button-sidebar {
  .icon {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    .icon {
      transform: translateX(-4px);
    }
  }
}
</style>
