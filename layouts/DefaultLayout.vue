<template>
  <div class="items-center">
    <navigation-brand />
    <nuxt />
  </div>

</template>

<script>
import NavigationBrand from "~/components/NavigationBrand.vue";
export default {
  components: { NavigationBrand },
};
</script>
