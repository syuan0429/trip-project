<script setup>
import TripLayout from '@/components/tripLayout.vue'
</script>

<template>
<trip-layout>
<div class="font-bold text-7xl text-center justify-around mb-16">404
  </div>
  <div>
    <p class="mb-8 text-2xl text-center">您查看的頁面不存在</p>
  <p class="text-2xl text-center">請回到首頁進行購物^^</p>
  <a-button type="primary class=font-bold w-60 h-12 ml-20 mb-4 text-center bg-rose-600 text-xl rounded-lg">繼續購物</a-button>
  </div>

<img class="w-2/5" src="https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/f37eaf0f8cef49c4b6584d6dfa72b4c5~tplv-xv4ileqgde-resize-w:750.image" alt="">


  <footer class="text-center mx-auto">
    <div class=" mx-auto w-full h-40 object-cover bg-slate-200">
      <nav class="flex justify-around items-center h-16">
        <div class="cursor-pointer" @click="changePage('/')">
          <img class="w-[200px]" src="@/assets/images/logo.png" alt="">
        </div>
        <ul class="flex">
          <li class="mr-4 cursor-pointer flex items-center">
          </li>
          <li class="mr-4 cursor-pointer">隱私權政策</li>
          <span class="mr-3">|</span>
          <li class="cursor-pointer">聯絡我們</li>
        </ul>
      </nav>
      <p class="mb-1 ">
          本網站僅供個人作品使用，不提供商業用途<span class="mx-2">|</span
          >SyuanTW
        </p>
        <p>©2024 syuan All Rights Reserved.</p>
    </div>
  </footer>
  </trip-layout>
</template>

<style scoped>


</style>