<template>
  <div class="h-80 bg-[#ae2024] grid grid-cols-2">
    <div class="pl-52 pt-8">
      <h1 class="text-white text-3xl mb-4 font-bold uppercase">
        Thong tin lien he
      </h1>
      <div class="px-16">
        <ul class="px-2 col-span-2">
          <li class="flex items-center mb-2 text-white">
            <span class="material-symbols-outlined mr-2 text-2xl"> call </span
            >SDT: 012345678
          </li>
          <li class="flex items-center mb-2 text-white">
            <span class="material-symbols-outlined mr-2 text-2xl"> mail </span
            >EMAIL: test@gmail.com
          </li>
          <li class="flex items-center mb-2 text-white">
            <span class="material-symbols-outlined mr-2 text-2xl">
              location_on
            </span>
            DIA CHI: SO XXX, ABC
          </li>
          <li class="flex items-start mb-2 text-white">
            <span class="material-symbols-outlined mr-2 text-2xl">
              schedule
            </span>
            <span class="mt-1.5"
              >THOI GIAN LAM VIEC: Thứ 2 đến CN 8h30 - 12h30 và 14h00 -
              22h00</span
            >
          </li>
          <li class="flex items-start mb-2 gap-5 text-white">
            <i class="bx bxl-facebook-circle text-2xl"></i>
            <i class="bx bxl-twitter text-2xl"></i>
            <i class="bx bxl-youtube text-2xl"></i>
          </li>
        </ul>
        <div class="pl-8 flex gap-5 text-white"></div>
      </div>
    </div>
    <div class="h-80 w-[70%] p-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29793.091604521458!2d105.8177024!3d21.0272256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695482743840!5m2!1sen!2s"
        class="h-full w-full rounded-md border-2 border-black"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <button
      @click="scrollToTop"
      class="fixed bottom-10 right-10 flex items-center justify-center p-4"
      v-if="!hiddenButtonTop"
    >
      <span class="material-symbols-outlined text-white text-6xl">
        arrow_circle_up
      </span>
    </button>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  const hiddenButtonTop = ref<boolean>(true)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  onMounted(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        hiddenButtonTop.value = false
      } else {
        hiddenButtonTop.value = true
      }
    })
  })
</script>
