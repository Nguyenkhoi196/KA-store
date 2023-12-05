<template>
  <div></div>
</template>

<script setup lang="ts">
import { io } from 'socket.io-client'
// URL to your strapi instance
const SERVER_URL = 'http://localhost:1337'
const JWT_TOKKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTcwMTc2ODQyNiwiZXhwIjoxNzA0MzYwNDI2fQ.xxufhUCgYLkMAwV5ZEEPl5b7rpf9lKeTcxCD7PCXmmA'
// connect the socket
const socket = io(SERVER_URL, {
  auth: {
    stragey: 'jwt',
    token: JWT_TOKKEN,
  },
})

//  wait until socket connects before adding event listeners
socket.on('connection', () => {
  socket.on('home-page:create', (data) => {
    console.log('home-page created!')
    console.log(data)
  })
  socket.on('home-page:update', (data) => {
    console.log('home-page updated!')
    console.log(data)
  })
  socket.on('home-page:delete', (data) => {
    console.log('home-page deleted!')
    console.log(data)
  })
})
</script>

<style scoped></style>
