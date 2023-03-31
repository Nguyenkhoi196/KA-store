<template>
  <div class="bg-yellow-200">
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
