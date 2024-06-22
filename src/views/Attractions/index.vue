<script setup lang="ts">
import TripLayout from '@/components/tripLayout.vue'

import type { CSSProperties } from 'vue';
const cardStyle: CSSProperties = {
  width: '960px',
};
const imgStyle: CSSProperties = {
  display: 'block',
  width: '273px',
};
</script>

<template>
<trip-layout>
<header>
  <div class="container mx-auto py-2">
    <nav class="flex justify-between items-center h-16">
      <img  class="w-[200px]" src="@/assets/images/logo.png" alt="">
      <ul class="flex">
        <li class="mr-4 cursor-pointer">翻譯</li>
        <li class="mr-4 cursor-pointer">登入</li>
        <li class="cursor-pointer">註冊</li>
    </ul>
    </nav>
  </div>
</header>

  <section class=" mx-auto mt-12">
<a-carousel>
    <img class="h-[550px] mx-full object-cover" src="https://images.unsplash.com/photo-1509512658157-a8f3e5536669?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
  </a-carousel>
  </section>
  <div class="container mx-auto py-2 mt-12">
  <a-space direction="vertical border-solid">
    <p>關鍵字搜尋</p>
    <a-input v-model:value="value" placeholder="請輸入關鍵字" />
    <p>篩選目的地</p>
  <a-cascader v-model:value="value" placeholder="請選擇地區" :options="options" />
  <br />
  <a-button class="font-bold w-full text-center" :size="large">清除條件</a-button>
  </a-space>
  <a-card :style="cardStyle" :body-style="{ padding: 0, overflow: 'hidden' }">
    <a-flex justify="space-between">
      <img class="rounded-lg"
        alt="avatar"
        src="https://images.unsplash.com/photo-1498175682691-9acfdb41c49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8RmVycmlzJTIwd2hlZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        :style="imgStyle"
      />
      <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px' }">
        <a-typography>
          <a-typography-title :level="3">
            <h3>【門票】 美麗華摩天輪 情人節限定</h3>
            <p class="text-base">想來場浪漫的情人節約會，又不知道該如何規劃行程嗎？ 那你千萬不能錯過台北唯一的摩天輪💛</p>
          </a-typography-title>
        </a-typography>
        <a-button type="primary class=font-bold w-54 h-8 ml-20 mb-8 text-center bg-rose-600 text-xl rounded-lg" href="https://antdv.com" target="_blank">TWD 200起</a-button>
      </a-flex>
    </a-flex>
  </a-card>
    <a-card :style="cardStyle" :body-style="{ padding:0, overflow: 'hidden' }">
    <a-flex justify="space-between">
      <img class="rounded-lg"
        alt="avatar"
        src="https://images.unsplash.com/photo-1534081333815-ae5019106622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGl2aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        :style="imgStyle"
      />
      <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px' }">
        <a-typography>
          <a-typography-title :level="3">
            <h3>【體驗】 澎湖海底郵筒潛水體驗(免證照)</h3>
            <p class="text-base">來到澎湖除了水上的SUP、獨木舟、浮潛體驗之外，還可以揹著氣瓶潛到10公尺的海底呢！</p>
          </a-typography-title>
        </a-typography>
        <a-button type="primary class=font-bold w-54 h-8 ml-20 mb-8 text-center bg-rose-600 text-xl rounded-lg" href="https://antdv.com" target="_blank">TWD 200起</a-button>
      </a-flex>
    </a-flex>
  </a-card>
      <a-card :style="cardStyle" :body-style="{ padding:0, overflow: 'hidden' }">
    <a-flex justify="space-between">
      <img class="rounded-lg"
        alt="avatar"
        src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2N1YmElMjBkaXZpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        :style="imgStyle"
      />
      <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px' }">
        <a-typography>
          <a-typography-title :level="3">
            <h3>【體驗】 熊潛水 | 潛水體驗(免證照)</h3>
            <p class="text-base">不會游泳的你也想跟海龜近距離拍照嗎，那麼小琉球和熊潛水絕對可以幫助你實現夢想！</p>
          </a-typography-title>
        </a-typography>
        <a-button type="primary class=font-bold w-54 h-8 ml-20 mb-8 text-center bg-rose-600 text-xl rounded-lg" href="https://antdv.com" target="_blank">TWD 200起</a-button>
      </a-flex>
    </a-flex>
  </a-card>
  <a-card :style="cardStyle" :body-style="{ padding:0, overflow: 'hidden' }">
    <a-flex justify="space-between">
      <img class="rounded-lg"
        alt="avatar"
        src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlyZXdvcmslMjAxMDF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        :style="imgStyle"
      />
      <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px' }">
        <a-typography>
          <a-typography-title :level="3">
            <h3>【門票】 跨年晚會演唱會 | 煙火秀搖滾區</h3>
            <p class="text-left">台北每年最熱門的活動之一，絕對是跨年演唱會和煙火秀啦！</p>
          </a-typography-title>
        </a-typography>
        <a-button type="primary class=font-bold w-54 h-8 ml-20 mb-8 text-center bg-rose-600 text-xl rounded-lg" href="https://antdv.com" target="_blank">TWD 200起</a-button>
      </a-flex>
    </a-flex>
  </a-card>
  </div>
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
</trip-layout>
</template>


<style scoped>

</style>

