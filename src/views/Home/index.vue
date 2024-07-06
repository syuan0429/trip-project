<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/productCard.vue'
import { useRouter } from 'vue-router'
import { travelApi } from '@/api/module/travel'
import { useTravelStore } from '@/store/travel'

import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

const travelStore = useTravelStore()
const travelList = ref(travelStore.travelData || [])

console.log(travelStore.travelData);
const getTravelList = async() => {
  const { data, code } = await travelApi.getTravelList()
  travelList.value = data
  travelStore.setTravelData(data)
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
  "/src/assets/images/penghu.jpg",
  "/src/assets/images/jiufen.jpg"
])
import TripLayout from '@/components/tripLayout.vue'
// 活動(activity)、美食(food)、住宿(hotel)、交通(traffic)、景點(place)
const categories = [
  {
    key: 'activity',
    title: '活動',
    icon: 'fa-gamepad'
  },
  {
    key: 'food',
    title: '美食',
    icon: 'fa-bowl-food'
  },
  {
    key: 'hotel',
    title: '住宿',
    icon: 'fa-hotel'
  },
  {
    key: 'traffic',
    title: '交通',
    icon: 'fa-plane'
  },
  {
    key: 'place',
    title: '景點',
    icon: 'fa-umbrella-beach'
  }
]
onMounted(() => getTravelList())
</script>

<template>
  <trip-layout>
    <a-carousel class="mb-6 position: relative" autoplay>
      <img v-for="(item,idx) in carouselImages" :key="idx" class="h-[650px] w-full object-cover" :src="item" alt="">
    </a-carousel>
    <div class="position: absolute center-28 top-28 translate-x-1/2 font-semibold text-4xl mt-28 font-serif">帶著你的趣味 TripWay 出發去！<br><br>讓我們帶著你一同欣賞台灣的美</div>
    <div class="mb-6">
      <ul class="border flex justify-between w-[600px] mx-auto rounded-3xl py-4 shadow-xl px-10">
        <li @click="changePage(`/attractions?category=${item.key}`)"
          class="flex flex-col items-center text-2xl cursor-pointer hover:text-themeColor" v-for="item in categories"
          :key="item.key">
          <i :class="['fa-solid', item.icon]"></i>
          <p class="mt-2">{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <section class="container mx-auto">
      <section id="product">
        <div class="container">
          <div class="flex gap-4 w-[1280px]">
            <div class="w-1/5 ">
              <h2 class="text-4xl font-bold mb-9 ">熱門 <br>TOP 10</h2>
              <p class="text-xl">原來大家都喜歡這些！<br>
                跟著玩保證不踩雷</p>
            </div>
            <div v-for="item in travelList?.filter(data => data.show === show.Hot)" :key="item.id" class="w-1/5 ">
              <product-card @btn-click="changePage(`/attractionsDetail/${item.id}`)" :image="item.image"
                :title="item.title" :origin-price="item.originPrice" :price="item.price" :rate="item.rate"
                :label="item.label" />
            </div>
          </div>
          <div class="mt-16">
            <h2 class="text-4xl font-bold mb-5">打卡拍照必去</h2>
            <div class="flex gap-4 w-[1280px]">
              <div v-for="item in travelList?.filter(data => data.show === show.Photo)" :key="item.id" class="w-1/5">
                <product-card @btn-click="changePage(`/attractionsDetail/${item.id}`)" :image="item.image"
                  :title="item.title" :origin-price="item.originPrice" :price="item.price" :rate="item.rate"
                  :label="item.label" />
              </div>
            </div>
          </div>
          <div class="mt-16">
            <h2 class="text-4xl font-bold mb-5">最新優惠套票</h2>
            <div class="flex gap-4 w-[1230px]">
              <div v-for="item in travelList?.filter(data => data.show === show.Ticket)" :key="item.id" class="w-1/5">
                <product-card @btn-click="changePage(`/attractionsDetail/${item.id}`)" :image="item.image"
                  :title="item.title" :origin-price="item.originPrice" :price="item.price" :rate="item.rate"
                  :label="item.label" />
              </div>
            </div>
          </div>

          <div class="mt-16 w-auto">
            <h2 class="text-4xl font-bold mb-5">熱門城市推薦</h2>
            <div class="cursor-pointer flex gap-9">
              <div class="border rounded-xl overflow-auto hover:scale-105 flex flex-space-around duration-500">
              <img class="w-full h-150 object-cover" src="https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fDEwMXxlbnwwfHwwfHx8MA%3D%3D" alt="">
              </div>

              <div class="border rounded-xl overflow-auto hover:scale-105 flex flex-space-around duration-500">
              <img src="https://iamamberhh.github.io/HH-STAY/image/popular_city_penghu.jpg" alt="">
              </div>
              <div class="border rounded-xl overflow-auto hover:scale-105 flex flex-space-around duration-500">
              <img src="https://intranet.travel4u.com.tw/eWeb_t4u/IMGDB/002294/002317/002451/00067748.JPG" alt="">
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

</template>

<style scoped>

</style>