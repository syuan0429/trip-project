<script setup>
import TripLayout from '@/components/tripLayout.vue'
</script>

<template>
<trip-layout>
  <img class="w-full h-[700px] object-cover position: relative" src="https://images.unsplash.com/photo-1630244024081-dc4039254a46?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
  <div class="position: absolute center-28 top-28 translate-x-1/2 font-semibold text-4xl mt-28 font-serif">404<br><br>您查看的頁面不存在<br><br>請回首頁進行購物^^<br><br>
  <a-button type="position:relative primary class=font-bold w-60 h-12 ml-8 mb-4 text-center bg-rose-600 text-xl rounded-lg hover:scale-105 duration-500">繼續購物</a-button>
  </div>

  </trip-layout>
</template>

<style scoped>
</style>
