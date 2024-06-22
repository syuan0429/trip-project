<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import ProductCard from '@/components/productCard.vue'
const { t } = useI18n()
const carouselImages = ref([
  "/src/assets/images/banner101.jpg",
  "/src/assets/images/penghu.jpg",
  "/src/assets/images/janhusun.jpg"
])
import TripLayout from '@/components/tripLayout.vue'

const productData = [
  {
    id: 1,
    image: 'https://www.sheratongrandtaipei.com/files/pages_15973118601159vm571_l.jpg',
    title: '【餐券】 台北喜來登大飯店｜十二廚 Kitchen | 平日自助午餐券',
    originPrice: 1450,
    rate: 4,
    price: 1249,
    label: '最優價格保證'
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/id/964647326/photo/penghu-great-bridge-in-xiyu-township-penghu-taiwan.jpg?s=612x612&w=0&k=20&c=B-seAt6aUTqME4jmIqKuqN-MCwQ6TQE0tSZLQug8OCs=',
    title: '【包車】 半日遊 | 跨海大橋＆大菓葉玄武岩＆奎壁山踏浪',
    originPrice: 5000,
    rate: 3,
    price: 4000,
    label: '最優價格保證'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531208730879-a0470d015a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FibGUlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: '【交通】 貓空纜車 暢遊一日票',
    originPrice: 360,
    rate: 3,
    price: 290,
    label: '最優價格保證'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1575980202155-18b6c1e49169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXF1YXJpdW18ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: '【門票】 澎湖水族館門票',
    originPrice: 400,
    rate: 2,
    price: 300,
    label: '最優價格保證'
  }
]
const productData1 = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1647941603875-a56ae65894b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: '【門票】 袖珍博物館',
    originPrice: 350,
    rate: 4,
    price: 250,
    label: '最優價格保證'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1572715381359-002b1eabd56b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: '【門票】 台北101觀景台',
    originPrice: 600,
    rate: 4,
    price: 420,
    label: '最優價格保證'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1498175682691-9acfdb41c49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8RmVycmlzJTIwd2hlZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: '【門票】 美麗華摩天輪 情人節限定',
    originPrice: 200,
    rate: 4,
    price: 150,
    label: '最優價格保證'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGl2aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    title: '【體驗】 澎湖海底郵筒潛水體驗(免證照)',
    originPrice: 2500,
    rate: 4,
    price: 2400,
    label: '最優價格保證'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwc2hvcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    title: '【餐券】 英迪格酒店｜CRAFT 咖啡廳餐券',
    originPrice: 638,
    rate: 3,
    price: 580,
    label: '最優價格保證'
  }
]
const productData2 = [
  {
    id: 1,
    image: 'https://www.kkday.com/zh-tw/blog/wp-content/uploads/taipei_steak_USDA-Prime-Ribeye-Top-Cap-Steak-6oz-2.jpg',
    title: '【餐券】 教父牛排 頂級老饕牛排',
    originPrice: 3800,
    rate: 4,
    price: 3600,
    label: '最優價格保證'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2N1YmElMjBkaXZpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: '【體驗】 熊潛水 | 潛水體驗(免證照)',
    originPrice: 2500,
    rate: 3,
    price: 2051,
    label: '最優價格保證'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlyZXdvcmslMjAxMDF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: '【門票】 跨年晚會演唱會 | 煙火秀搖滾區',
    originPrice: 1750,
    rate: 3,
    price: 1688,
    label: '最優價格保證'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602693680104-b8ae3138c22b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8TWFycmlvdHR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: '【住宿】 萬豪酒店 | 經典客房平日住宿券',
    originPrice: 8000,
    rate: 3,
    price: 7000,
    label: '最優價格保證'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: '【住宿】 和田大飯店 | 雙人房住宿券',
    originPrice: 3000,
    rate: 3,
    price: 2400,
    label: '最優價格保證'
  }
]
</script>

<template>
  <trip-layout>
    <a-carousel class="mb-20">
      <img v-for="(item,idx) in carouselImages" :key="idx" class="h-[650px] w-full object-cover" :src="item" alt="">
    </a-carousel>
    <section class="container mx-auto">
      <section id="product">
        <div class="container">
          <div class="flex gap-4">
            <div class="w-1/5 ">
              <h2 class="text-4xl font-bold mb-9">熱門 <br>TOP 10</h2>
              <p class="text-xl">原來大家都喜歡這些！<br>
                跟著玩保證不踩雷</p>
            </div>
            <div v-for="item in productData" :key="item.id" class="w-1/5">
              <product-card :image="item.image" :title="item.title" :origin-price="item.originPrice" :price="item.price"
                :rate="item.rate" :label="item.label" />
            </div>
          </div>
          <div class="mt-16">
            <h2 class="text-4xl font-bold mb-5">打卡拍照必去</h2>
            <div class="flex gap-4">
              <div v-for="item in productData1" :key="item.id" class="w-1/5">
                <product-card :image="item.image" :title="item.title" :origin-price="item.originPrice" :price="item.price"
                  :rate="item.rate" :label="item.label" />
              </div>
            </div>
          </div>
          <div class="mt-16">
            <h2 class="text-4xl font-bold mb-5">最新優惠套票</h2>
            <div class="flex gap-4">
              <div v-for="item in productData2" :key="item.id" class="w-1/5">
                <product-card :image="item.image" :title="item.title" :origin-price="item.originPrice" :price="item.price"
                  :rate="item.rate" :label="item.label" />
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

  <footer>
    <div class=" mx-auto w-full h-40 object-cover bg-slate-200">
      <nav class="flex justify-around items-center h-16">
        <div class="cursor-pointer" @click="changePage('/')">
          <img class="w-[200px]" src="@/assets/images/logo.png" alt="">
        </div>
        <ul class="flex">
          <li class="mr-4 cursor-pointer flex items-center">
          </li>
          <li class="mr-4 cursor-pointer">隱私權政策</li>
          <li class="cursor-pointer">聯絡我們</li>
        </ul>
      </nav>
      <p class="text-center">本網站僅供個人作品使用，不提供商業用途</p>
    </div>
  </footer>
</template>

<style scoped>

</style>