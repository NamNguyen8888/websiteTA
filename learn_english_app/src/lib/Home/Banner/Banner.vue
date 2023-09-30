<template>
  <div class="mt-[3.3rem] mx-36">
    <swiper
      :slides-per-view="1"
      :modules="modules"
      :pagination="{ clickable: true }"
      :speed="1000"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <swiper-slide><div class="bg-red-300 h-[400px]">aaa</div></swiper-slide>
      <swiper-slide><div class="bg-green-300 h-[400px]">aaa</div></swiper-slide>
      <swiper-slide
        ><div class="bg-yellow-300 h-[400px]">aaa</div></swiper-slide
      >
    </swiper>
  </div>
</template>

<script lang="ts" setup>
  import 'swiper/css'
  import 'swiper/css/autoplay'
  import 'swiper/css/pagination'
  import { A11y, Autoplay, Pagination } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'

  const modules = [Pagination, A11y, Autoplay]
</script>

<style scoped>
  .swiper-pagination-bullet {
    background-color: white !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #ccc !important;
  }
</style>
