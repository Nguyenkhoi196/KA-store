import Vue from 'vue'
import { initFlowbite } from 'flowbite'
const useFlowbite = {
  mounted() {
    initFlowbite()
  },
}
Vue.mixin(useFlowbite)
