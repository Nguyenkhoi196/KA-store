// eslint-disable-next-line no-irregular-whitespace
<template>
  <div>
    <h1>
      error
    </h1>
    <button @click="goHome">
      Go Home
    </button>
  </div>
</template>

<script>
  export default {
    layout: 'ErrorLayout',
    props: ['error'],
    methods: {
      goHome() {
        this.$router.push({ path: '/'})
      }
    }
  }
</script>
