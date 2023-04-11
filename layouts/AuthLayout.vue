<template>
<div>
  <nuxt/>

  <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto text-base">
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
          <fa :icon="['fas', 'chart-simple']" />
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
          <fa :icon="['fas', 'file-invoice']" />
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
          <fa :icon="['fas', 'box-archive']" />
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
          <fa :icon="['fas', 'circle-user']" />
        </button>
    </div>
</div>

</div>

</template>
<script>

export default {
  name: "AuthLayout"
}
</script>
