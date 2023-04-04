<!-- <script lang="ts">

import { ref } from 'vue'

export default {
  setup() {
    const api_key: string ='123';
    const url_base: string ='123';
    const weather = ref<Record<string, any>>({});
    const cityName = ref<string>('');

    const fetchWeather = (enter = KeyboardEvent)=> {
      if (enter.key ==='Enter') {
        fetch(`${url_base}/weather?q=${cityName.value}&appid=${api_key}`)
          .then((response: Response) => {
            if (!response.ok) {
              throw response
            }
            return response.json()
          })
          .then(setResults);
      }
    }
    const setResults = (data: Record<string, any>)=>{
      weather.value = data;
    }
    return{
      fetchWeather,
      api_key,
      url_base,
      weather,
      cityName
    }
  }
//   data() {
//     return {
//       api_key: "api_key",
//       url_base: "",
//       querybase:"",
//       weather: {},
//       cityName: '',
//     }
//   },
//   methods: {
//     fetchWeather (enter) {
//       if (enter.key === "Enter") {
//         fetch(`${this.url_base}/weather?q=${this.cityName}&appid=${this.api_key}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw response
//           }
//           return response.json()
//         })
//         .then(this.setResults)
//       }
//     },
//     setResults (data) {
//       this.weather = data
//     }
//   }
}
</script>

<template>
  <div>
    <input type="text" v-model="cityName">
    <button @click="fetchWeather">Fetch</button>
  </div>
</template>
 -->
