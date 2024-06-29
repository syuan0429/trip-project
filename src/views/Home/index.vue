<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/productCard.vue'
import { useRouter } from 'vue-router'
import { travelApi } from '@/api/module/travel'

const travelList = ref([])

const getTravelList = async() => {
  const { data, code } = await travelApi.getTravelList()
  console.log(data);
  travelList.value = data
}
const show = {
  Hot: 'hot',
  Photo: 'photo',
  Ticket: 'ticket'
}

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const { t } = useI18n()
const carouselImages = ref([
  "/src/assets/images/banner101.jpg",
  "/src/assets/images/penghu.jpg"
])
import TripLayout from '@/components/tripLayout.vue'
// 活動(activity)、美食(food)、住宿(hotel)、交通(traffic)、景點(place)

onMounted(() => getTravelList())
</script>

<template>
  <trip-layout>
    <a-carousel class="mb-20" autoplay>
      <img v-for="(item,idx) in carouselImages" :key="idx" class="h-[650px] w-full object-cover" :src="item" alt="">
    </a-carousel>
    <div @click="changePage(`/attractions?category=activity`)">活動</div>
    <section class="container mx-auto">
      <section id="product">
        <div class="container">
          <div class="flex gap-4">
            <div class="w-1/5 ">
              <h2 class="text-4xl font-bold mb-9">熱門 <br>TOP 10</h2>
              <p class="text-xl">原來大家都喜歡這些！<br>
                跟著玩保證不踩雷</p>
            </div>
            <div v-for="item in travelList?.filter(data => data.show === show.Hot)" :key="item.id" class="w-1/5">
              <product-card @btn-click="changePage(`/attractionsDetail/${item.id}`)" :image="item.image"
                :title="item.title" :origin-price="item.originPrice" :price="item.price" :rate="item.rate"
                :label="item.label" />
            </div>
          </div>
          <div class="mt-16">
            <h2 class="text-4xl font-bold mb-5">打卡拍照必去</h2>
            <div class="flex gap-4">
              <div v-for="item in travelList?.filter(data => data.show === show.Photo)" :key="item.id" class="w-1/5">
                <product-card @btn-click="changePage(`/attractionsDetail/${item.id}`)" :image="item.image"
                  :title="item.title" :origin-price="item.originPrice" :price="item.price" :rate="item.rate"
                  :label="item.label" />
              </div>
            </div>
          </div>
          <div class="mt-16">
            <h2 class="text-4xl font-bold mb-5">最新優惠套票</h2>
            <div class="flex gap-4">
              <div v-for="item in travelList?.filter(data => data.show === show.Ticket)" :key="item.id" class="w-1/5">
                <product-card @btn-click="changePage(`/attractionsDetail/${item.id}`)" :image="item.image"
                  :title="item.title" :origin-price="item.originPrice" :price="item.price" :rate="item.rate"
                  :label="item.label" />
              </div>
            </div>
          </div>

          <div class="mt-16">
            <h2 class="text-4xl font-bold mb-5">熱門城市推薦</h2>
            <div class="flex gap-8 w-650">
              <div class="border rounded-xl overflow-auto hover:scale-105 flex flex-space-around">
              <img src="https://iamamberhh.github.io/HH-STAY/image/popular_city_taipei.jpg" alt="">
              </div>
              <div class="border rounded-xl overflow-auto hover:scale-105 flex flex-space-around">
              <img src="https://iamamberhh.github.io/HH-STAY/image/popular_city_penghu.jpg" alt="">
              </div>
              <div class="border rounded-xl overflow-auto hover:scale-105 flex flex-space-around">
              <img src="https://iamamberhh.github.io/HH-STAY/image/popular_city_liuqiu.jfif" alt="">
              </div>
              </div>
            </div>
            </div>
      </section>
    </section>
    <div class="mt-12">
      <img src="https://travel-fun.vercel.app/images/home-bg.png" alt="">
    </div>
  </trip-layout>

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
</template>

<style scoped>

</style>