<template>
  <tab-active 
  v-for="(tab, index) in tabs)"
  v-if="group === 1" 
  key="tab"
  :class = "active"
  @click="setActive"
  >
    {{ group.tab.title }}
  </tab-active>
</template>

<script>
import NavigationBrand from '~/components/NavigationBrand.vue'

export default {
  components: { NavigationBrand },
};
