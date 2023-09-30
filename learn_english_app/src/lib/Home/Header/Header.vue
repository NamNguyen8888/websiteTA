<template>
  <div class="fixed top-0 z-50 w-full">
    <div
      class="h-[3.3rem] bg-[#ae2024] grid grid-cols-7 items-center px-10 shadow-lg border-b-2 border-black"
    >
      <div class="col-span-1">
        <a href="#" class="text-white text-3xl gap-1">Logo</a>
      </div>
      <div class="col-span-3">
        <ul class="flex items-center justify-between text-white h-[3.3rem]">
          <li
            class="hover:bg-[#ccc] px-[2.495rem] py-[0.8rem] flex-1 text-center border-x border-black/40"
            :class="{ 'bg-[#ae2024]': active }"
          >
            <a href="#">Trang chu</a>
          </li>
          <li
            class="hover:bg-[#ccc] px-[2.495rem] py-[0.8rem] flex-1 text-center border-r border-black/40"
          >
            <a href="#">Trang chu</a>
          </li>
          <li
            class="hover:bg-[#ccc] px-[2.495rem] py-[0.8rem] flex-1 text-center border-r border-black/40"
          >
            <a href="#">Trang chu</a>
          </li>
          <li
            class="hover:bg-[#ccc] px-[2.495rem] py-[0.8rem] flex-1 text-center border-r border-black/40"
          >
            <a href="#">Trang chu</a>
          </li>
        </ul>
      </div>
      <div class="col-span-2 flex justify-end h-8 rounded">
        <div class="flex items-center w-3/4 bg-white rounded">
          <input
            type="text"
            class="w-full h-full rounded px-2 focus:outline-none"
            placeholder="Nhap text"
          />
          <span
            class="material-symbols-outlined rounded text-gray-400 pr-2 cursor-pointer"
          >
            search
          </span>
        </div>
      </div>
      <div class="flex items-center justify-end px-10">
        <span class="material-symbols-outlined mr-2 text-white">
          account_circle
        </span>
        <div class="text-white relative [&>ul]:hover:block cursor-pointer">
          Tai khoan
          <ul
            class="absolute bg-white text-black w-32 rounded hidden shadow mt-3 before:content-[''] before:w-32 before:absolute before:-top-3 before:right-0 before:h-3"
          >
            <li
              class="last:border-none border-b border-gray-300 px-2 py-3 hover:bg-gray-200 hover:rounded-t"
            >
              Dang nhap
            </li>
            <li
              class="last:border-none border-b border-gray-300 px-2 py-3 hover:bg-gray-200 hover:rounded-b"
            >
              Dang ki
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const active = ref<boolean>(true)
</script>
