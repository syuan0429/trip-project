<script setup>
import TripLayout from '@/components/tripLayout.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { useTravelStore } from '@/store/travel'

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const travelStore = useTravelStore()
const { query } = useRoute()
const category = ref(query.category)
const travelList = ref(travelStore.travelData.filter(data => data.category === category.value))
</script>

<template>
<trip-layout>
  <section class=" mx-auto mt-4">
<a-carousel>
    <img class="h-[550px] mx-full object-cover" src="https://images.unsplash.com/photo-1509512658157-a8f3e5536669?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
  </a-carousel>
  </section>
  <div class="container mx-auto py-2 mt-12">
          <div class="flex justify-center">
        <div class="mr-24">
          <a-space direction="vertical">
            <p class="text-base">關鍵字搜尋</p>
            <a-input v-model:value="value" placeholder="請輸入關鍵字" />
            <p class="text-base">篩選目的地</p>
            <a-cascader v-model:value="value" placeholder="請選擇地區" :options="options" />
            <br />
            <a-button class="font-bold w-full text-center" :size="large">清除條件</a-button>
          </a-space>
        </div>
        <div>
          <div @click="changePage(`/attractionsDetail/${item.id}`)"
            class="flex justify-between w-full border  p-3 rounded-xl mb-5 last:mb-0 cursor-pointer"
            v-for="item in travelList" :key="item.id">
            <img class="w-[250px] h-[180px] object-cover rounded-l-xl mr-1" :src="item.image" alt="image">
            <div class="w-[370px] overflow-hidden">
              <h3 class="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis mb-4">{{ item.title }}</h3>
              <p class="text-base ml-2">{{ item.desc }}</p>
              <div class="flex justify-end mt-10">
                <span class="inline-block mt-3 bg-rose-600 text-white px-2 py-1 rounded-lg ">TWD {{ item.price
                  }}<span class="text-sm">起</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
</trip-layout>
</template>


<style scoped>

</style>

