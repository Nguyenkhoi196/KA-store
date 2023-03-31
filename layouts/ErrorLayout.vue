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

// eslint-disable-next-line no-irregular-whitespace
<script>
  export default {
    props: ['error'],
    methods: {
      goHome() {
        this.$router.push({ path: '/'})
      }
    },
    layout: 'DefaultLayout'
  }
</script>
