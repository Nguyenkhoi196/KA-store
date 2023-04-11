<template>
  <div>
    <navigation-brand />
    <nuxt />
  </div>

</template>

<script>
import NavigationBrand from "~/components/NavigationBrand.vue";
export default {
  name: 'DefaultLayout',
  components: { NavigationBrand },
};
</script>
