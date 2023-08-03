<template>
  <div>
    <div
      class="absolute flex flex-row justify-between w-screen px-10 py-5 h-24 border-b-[1px] border-tertiary bg-primary/60"
    >
      <div class="flex">
        <img class="h-auto" src="../../static/logoHeader.png" alt="" />
      </div>
      <div class="flex flex-row justify-between gap-6">
        <div class="min-w-sm self-center">
          <form action="" class="flex flex-row">
            <input type="text" placeholder="Tìm kiếm" class="px-2 py-1" />
            <button class="">
              <span class="h-3 w-3 block"> </span>
            </button>
          </form>
        </div>

        <div class="nav-item text-tertiary">
          <nuxt-link to="">Về chúng tôi </nuxt-link>
        </div>
        <div class="nav-item text-tertiary">
          <nuxt-link to="">Sản phẩm</nuxt-link>
        </div>
        <div class="nav-item text-tertiary">
          <nuxt-link to="">Thông báo</nuxt-link>
        </div>
        <div class="text-secondary nav-item">
          <nuxt-link to="/login">Đăng nhập</nuxt-link>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.nav-item {
  @apply text-base font-medium items-center self-center py-4
  hover:scale-105;
}
</style>
