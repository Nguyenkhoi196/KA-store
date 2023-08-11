<template>
  <div>
    <div
      class="flex flex-row items-center justify-between px-4 bg-secondary text-tertiary"
    >
      <h1 class="font-bold text-2xl">Hàng Hóa</h1>
      <div class="flex flex-row gap-4 text-base pl-4">
        <button class="button-icon">
          <fa :icon="['fas', 'magnifying-glass']" />
        </button>
        <button class="button-icon">
          <fa :icon="['fas', 'filter']" />
        </button>
        <button class="button-icon">
          <fa :icon="['fas', 'ellipsis-vertical']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
::placeholder {
  color: white;
}
</style>
