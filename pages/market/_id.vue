<template>
  <div>
    {{ route.params }}
  </div>
</template>
<script>
import { useRoute } from '@nuxtjs/composition-api'

export default {
  setup() {
    const route = useRoute()

    return {
      route,
    }
  },
}
</script>

<style lang="scss" scoped></style>
