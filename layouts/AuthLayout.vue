<template>
<div>
  <nuxt/>

  <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary border-t border-gray-200">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto text-2xl">
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 text-primary hover:text-tertiary hover:border-x-2 hover:border-tertiary">
          <fa :icon="['fas', 'chart-simple']" />
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 text-primary hover:text-tertiary hover:border-x-2 hover:border-tertiary">
          <fa :icon="['fas', 'file-invoice']" />
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 text-primary hover:text-tertiary hover:border-x-2 hover:border-tertiary">
          <fa :icon="['fas', 'box-archive']" />
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 text-primary hover:text-tertiary hover:border-x-2 hover:border-tertiary">
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
