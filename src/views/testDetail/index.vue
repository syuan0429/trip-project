<script setup>
import TripLayout from '@/components/tripLayout.vue'
import { FlagOutlined,CheckOutlined,CloseOutlined} from '@ant-design/icons-vue';

import { ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
const value1 = ref(1);
const addonBeforeValue = ref('reduce');
const addonAfterValue = ref('add');



</script>

<template>
<trip-layout>

  <section class="container mt-16 pl-28">
<a-carousel class="autoplay">
    <div class="rounded-xl overflow-auto ">
    <img class="h-[450px] w-full object-cover" src="https://media.istockphoto.com/id/964647326/photo/penghu-great-bridge-in-xiyu-township-penghu-taiwan.jpg?s=612x612&w=0&k=20&c=B-seAt6aUTqME4jmIqKuqN-MCwQ6TQE0tSZLQug8OCs=" alt="">
    </div>
    <div class="rounded-xl overflow-auto ">
    <img class="h-[450px] w-full object-cover" src="https://images.unsplash.com/photo-1658196507373-6b43bfda37ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlbmdodXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="">
    </div>
    <div class="rounded-xl overflow-auto ">
    <img class="h-[450px] w-full object-cover" src="https://media.istockphoto.com/id/1288625645/photo/facade-of-tianhou-temple-in-penghu-island-taiwan.jpg?s=612x612&w=0&k=20&c=nryupB6NEKvfQjL_tNi-sjXxx-plwCRxECN_skkbjcA=" alt="">
    </div>
    <div class="rounded-xl overflow-auto ">
    <img class="h-[450px] w-full object-cover" src="https://media.istockphoto.com/id/1296622819/photo/terracotta-columnar-basalt-columns-on-the-tropical-island-of-penghu-taiwan-geological-lava.jpg?s=612x612&w=0&k=20&c=PmNT4zzHCFOIRpNPaCH2dZHvQDfI1SI89eJQ6Jspea4=" alt="">
    </div>
  </a-carousel>
  </section>
    <a-layout>
    <section class="container mt-12 pl-28">
    <div>
    <div class="flex justify-between">
      <a-button type="primary rounded-full bg-amber-400 mb-3">澎湖</a-button>
      <section>
        <div>
        <a-button type="primary class=font-bold w-60 h-12 ml-40 mb-4 mr-24 text-center bg-rose-600 text-xl ">TWD 4,000起</a-button>
      </div>
      </section>
      </div>
      <div class="flex justify-between">
        <h3 class="text-4xl font-bold mb-4 mr-24">【包車】 半日遊 | 跨海大橋＆大菓葉玄武岩＆奎壁山踏浪</h3>
        <div>
          <h4 class="text-xl mb-4 mr-40 ml-4">使用日期:</h4>
          <!-- <a-button type="primary class=font-bold w-60 h-12 ml-8 mb-4 text-center bg-yellow-300 text-xl mr-32">請選擇使用日期</a-button> -->
          <div class="text-xl mb-4 mr-40 w-40 ml-4 ">
            <a-space direction="vertical" :size="12">
            <a-date-picker :size="size" />
            </a-space>
          </div>

          <!-- //月曆如何點擊再秀出來
          <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" /> -->
        </div>
        </div>
        </div>
        <div class="flex justify-between">
        <a-tabs class="w-[700px]" v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="票卷介紹">
      <div><p class="text-base mb-6">沒有交通工具的旅客們，不用擔心啦！</p>
      <p class="text-base mb-8 leading-relaxed">現在舒適的澎湖包車旅遊服務來啦！不需擔心日曬雨淋，有專業司機帶你上山下海，輕鬆造訪澎湖的各個熱門觀光景點。</p>
      <p class="text-base mb-6 leading-relaxed">半日遊可以選擇南環線，從北塔玩到風櫃聽濤，再到山水沙灘拍拍美照，最後到奎壁山踏浪、探訪南寮社區，也可以選擇北環線，從澎湖跨海大橋開始，沿途探訪小門鯨魚洞、二崁古厝和大菓葉柱狀玄武岩等熱門景點。</p>
      <p class="text-base mb-1 leading-relaxed"><FlagOutlined class="bg-yellow-500 overflow-hidden"/> 開放時間：</p>
      <ol>
        <li class="text-base mb-2 leading-relaxed">1.服務時間：07:00~20:00</li>
        <li class="text-base mb-2 leading-relaxed">2.包車時間：半日遊5小時</li>
        <li class="text-base mb-2 leading-relaxed">3.超時費用：NT$500 / 時</li>
      </ol>
      <a-button class="font-bold w-2/4 ml-20 mb-20 text-center" :size="large">返回前頁</a-button>
      </div>
      </a-tab-pane>
    <a-tab-pane key="2" tab="購買須知" force-render>
      <div><ul class="text-base mb-6 list-disc">
        <li>購買後，TRIPWAY 會將票券 QR code 寄到您的電子信箱，請務必妥善留存。</li>
        <li>下訂時請以「票券使用日」為主，下訂後即無法變更，敬請留意。</li>
        <li>若需變更使用日期或場次，請於票券使用前 7 日，將整筆訂單取消後，重新下訂。</li>
        <li>下單後請自行留意使用時間，請按照預訂日期及當天開放時間內使用，逾期失效。</li>
        <li>請勿於任何非主辦單位正式授權售票之通路、網站購買票劵，以免自身權益受損，若透過上述管道購票<br>發生無法入場或其他交易糾紛問題，主辦單位及相關售票平台概不負責。</li>
        </ul>
        <p class="text-base mb-6">票券費用包含／不包含</p>
        <div class="flex justify-start ">
          <p class="text-base mb-1 mr-20"><CheckOutlined class="bg-yellow-500 overflow-hidden mr-2" />車票</p>
          <p class="text-base mb-1"><CloseOutlined class="bg-yellow-500 overflow-hidden mr-2" />餐飲折抵</p>
        </div>
        <div class="flex justify-start">
          <p class="text-base mb-20"><CheckOutlined class="bg-yellow-500 overflow-hidden mr-2" />服務費</p>
        <p class="text-base mb-1"><CloseOutlined class="bg-yellow-500 overflow-hidden mr-2 ml-16" />其他消費</p>
        </div>
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
      <div><ul class="text-base mb-8 list-disc">
        <li class="mt-8">使用地點：馬公市中心起 10 公里內之民宿或飯店、馬公港、機場</li>
        <li>請務必於票券使用當日，出示 QR code 進行兌換，逾期失效(住宿券除外)</li>
        </ul>
        <iframe  class="border-solid w-" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2126707827315!2d119.62685737534626!3d23.560804196028673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346c451f2ca4d42b%3A0xfcf7eab91c96fb01!2z5r6O5rmW5qmf5aC0!5e0!3m2!1szh-TW!2stw!4v1719982258256!5m2!1szh-TW!2stw" width="650" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a-button class="font-bold w-2/4 ml-4 mb-28 mt-12 text-center" :size="large">返回前頁</a-button>
      </div>
    </a-tab-pane>
  </a-tabs>
<a-layout>
        <a-layout-content :style="contentStyle"><h4 class="text-xl ml-36 mb-4">選擇人數:</h4>
        <div>
        <h4 class="text-xl ml-36 mb-4">一般票</h4>
        <span class="text-xl ml-36"> $ 4,000/次</span>
        <div>
          <a-space class="ml-32 mt-4" direction="vertical">
    <a-input-number v-model:value="value1" addon-before="-" addon-after="+"></a-input-number>
  </a-space>
        </div>
        <div class="ml-12">
          <a-button type="primary class=font-bold w-60 h-12 ml-20 mb-4 mt-8 text-center bg-yellow-300 text-xl">加入購物車</a-button>
        </div>
        </div>
        </a-layout-content>
      </a-layout>
        </div>
  </section>
      </a-layout>
</trip-layout>
</template>

<style scoped>

</style>