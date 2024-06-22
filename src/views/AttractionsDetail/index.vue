<script setup>
import TripLayout from '@/components/tripLayout.vue'
</script>

<template>
<trip-layout>

  <section class="container mt-16 pl-28">
<a-carousel>
    <div class="rounded-xl overflow-auto hover:scale-105">
    <img class="h-[450px] w-full object-cover" src="https://www.sheratongrandtaipei.com/files/pages_15973118601159vm571_l.jpg" alt="">
    </div>
    <div class="rounded-xl overflow-auto hover:scale-105">
    <img class="h-[450px] w-full object-cover" src="https://www.sheratongrandtaipei.com/files/pages_169954354913dqxci12_l.jpg" alt="">
    </div>
    <div class="rounded-xl overflow-auto hover:scale-105">
    <img class="h-[450px] w-full object-cover" src="https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_34984/20220412041544_WnGIy/jpg" alt="">
    </div>
    <div class="rounded-xl overflow-auto hover:scale-105 flex flex-space-around">
    <img class="h-[450px] w-full object-cover" src="https://qqhair.tw/wp-content/uploads/2022/04/collage-15.jpg" alt="">
    </div>
  </a-carousel>
  </section>
  <section class="container mt-16 pl-28">
    <div class="flex justify-between">
      <a-button type="primary rounded-full bg-amber-400 mb-4">台北</a-button>
    <a-button type="primary class=font-bold w-60 h-12 ml-20 mb-4 text-center bg-rose-600 text-xl">TWD 1,249起</a-button>
    </div>
    <div>
      <h3 class="text-4xl font-bold mb-10">【餐券】 台北喜來登大飯店｜十二廚 Kitchen | 平日<br>自助午餐券</h3>
    </div>

  <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="票卷介紹">
      <div><p class="text-base mb-6">經過了五天忙碌的上班日，周末給自己安排一場美食饗宴吧！</p>
      <p class="text-base mb-8 leading-relaxed">位於台北喜來登大飯店一樓的十二廚，挑高中庭的玻璃天幕設計與新鮮多元的美食料理，在不少賓客心中<br>享負「Buffet天王」的美譽，全廳劃分為12座全開放式的美食料理區，包含沙拉區、冷盤區、日式精選料<br>理區、中華美食區、西洋美食區、東南亞風味美食區、海鮮料理區、燒臘&燒烤美食區、各式麵食區、什<br>錦點心區、現場烘焙甜點&麵包區及各式飲品區。</p>
      <p class="text-base mb-6 leading-relaxed">各式料理皆為十二廚的拿手菜色，口味絕倫，一定能夠滿足您的味蕾！</p>
      <p class="text-base mb-1 leading-relaxed"><FlagTwoTone />開放時間：</p>
      <p class="text-base mb-12 leading-relaxed">午餐時段 週一至週五11:30 - 14:00</p>
      <a-button class="font-bold w-2/4 ml-20 mb-20 text-center" :size="large">返回前頁</a-button>
      </div>
      </a-tab-pane>
    <a-tab-pane key="2" tab="購買須知" force-render>
      <div><ul class="text-base mb-6 list-disc">
        <li>購買後，HH STAY 會將票券 QR code 寄到您的電子信箱，請務必妥善留存。</li>
        <li>下訂時請以「票券使用日」為主，下訂後即無法變更，敬請留意。</li>
        <li>若需變更使用日期或場次，請於票券使用前 7 日，將整筆訂單取消後，重新下訂。</li>
        <li>下單後請自行留意使用時間，請按照預訂日期及當天開放時間內使用，逾期失效。</li>
        <li>請勿於任何非主辦單位正式授權售票之通路、網站購買票劵，以免自身權益受損，若透過上述管道購票<br>發生無法入場或其他交易糾紛問題，主辦單位及相關售票平台概不負責。</li>
        </ul>
        <p class="text-base mb-6">票券費用包含／不包含</p>
        <div class="flex justify-start ">
          <p class="text-base mb-1 mr-20">餐飲折抵</p>
          <p class="text-base mb-1">其他消費</p>
        </div>
        <p class="text-base mb-20">服務費</p>
        <a-button class="font-bold w-2/4 ml-20 mb-20 text-center" :size="large">返回前頁</a-button>
      </div>
      </a-tab-pane>


    <a-tab-pane key="3" tab="退票政策">
      <div><ul class="text-base mb-6 list-disc">
        <li>使用日期前 30 日，可全額退費</li>
        <li>使用日期前 15 日，可退還 70% 之票券費用</li>
        <li>使用日期前 7 日，可退還 50% 之票券費用</li>
        <li>使用日期前 6 日起，恕無法受理退費</li>
        </ul>
        <p class="text-base mb-20">您可以透過訂單內的「客服信箱」進行退費申請</p>
        <a-button class="font-bold w-2/4 ml-20 mb-28 text-center" :size="large">返回前頁</a-button>
      </div>
    </a-tab-pane>

    <a-tab-pane key="4" tab="使用票卷">
      <div><ul class="text-base mb-16 list-disc">
        <li class="mt-8">使用地點：台北市中正區忠孝東路一段12號1樓</li>
        <li>請務必於票券使用當日，出示 QR code 進行兌換，逾期失效(住宿券除外)</li>
        </ul>
        <iframe  class="border-solid w-" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.689280590377!2d121.51945787538607!3d25.044616737863898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a971b0535025%3A0x8e1cbeae7a446e49!2z5Y-w5YyX5Zac5L6G55m75aSn6aOv5bqX!5e0!3m2!1szh-TW!2stw!4v1718868594585!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a-button class="font-bold w-2/4 ml-4 mb-28 mt-20 text-center" :size="large">返回前頁</a-button>
      </div>
    </a-tab-pane>
  </a-tabs>
  </section>
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

<style scoped></style>