<template>
  <div>
    <div :id="id" class="overflow-x-hidden mx-auto flex w-auto p-[20px_10px]">
      <div
        class="carousel content-center items-center grid grid-flow-col gap-5 relative left-0 transition-all"
      >
        <slot name="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  perView: {
    type: Number,
    default: 1,
  },
  duration: {
    type: Number,
    default: 3000,
  },
})

const totalScroll = ref(0)
let autoScroll = null

const initializeSlider = () => {
  const carousel = document.querySelector('.carousel')
  const items = carousel.querySelectorAll('.carousel > .item')
  carousel.style.setProperty('--per-view', props.perView)
  for (let i = 0; i < props.perView; i++) {
    carousel.insertAdjacentHTML('beforeend', items[i].outerHTML)
  }
  autoScroll = setInterval(scrolling, props.duration)
}

const scrolling = () => {
  totalScroll.value++
  const carousel = document.querySelector('.carousel')
  const items = carousel.querySelectorAll('.carousel > .item')

  if (totalScroll.value === items.length - 1) {
    clearInterval(autoScroll)
    totalScroll.value = 1
    carousel.style.transition = '0s'
    carousel.style.left = '0'
    autoScroll = setInterval(scrolling, props.duration)
  }

  const widthEl =
    carousel.querySelector('.carousel > :first-child').offsetWidth + 20
  const widthCarousel = document.getElementById(`${props.id}`)
  carousel.style.left = `-${totalScroll.value * widthEl}px`
  carousel.style.transition = '2s'
  widthCarousel.style.maxWidth = `${props.perView * widthEl}px`
}
onMounted(() => {
  initializeSlider()
  scrolling()
})
</script>

<style lang="scss" scoped></style>
