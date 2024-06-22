<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { GlobalOutlined } from '@ant-design/icons-vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const { t } = useI18n()
const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const { locale } = useI18n()
const languageList = ref([
  { locale: 'en-US', label: 'English' },
  { locale: 'zh-TW', label: '繁體中文' },
]);
const changeLanguage = (lang) => {
  locale.value = lang
  appStore.setLanguage(lang)
}
</script>
<template>
  <header>
    <div class="container mx-auto py-2">
      <nav class="flex justify-between items-center h-16">
        <div class="cursor-pointer" @click="changePage('/')">
          <img class="w-[200px]" src="@/assets/images/logo.png" alt="">
        </div>
        <ul class="flex">
          <li class="mr-4 cursor-pointer flex items-center">
            <a-dropdown :trigger="['click']">
              <GlobalOutlined />
              <template #overlay>
                <a-menu>
                  <a-menu-item v-for="item in languageList" :key="item.locale" @click="changeLanguage(item.locale)">
                    {{ item.label }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </li>
          <li class="mr-4 cursor-pointer">{{ t('login') }}</li>
          <li class="cursor-pointer">註冊</li>
        </ul>
      </nav>
    </div>
  </header>
  <slot />
  <section class="container mx-auto py-2">
    <div data-v-ee51e445="" class="flex items-start gap-2 mb-6">
      <div class="mt-2 h-2 w-2 bg-cc-primary"></div>
      <div>
        <h3 class="mb-2 text-xl font-bold md:text-[28px]">帶著你的趣味 TripWay 出發去！</h3>
        <h6 class="break-all text-sm text-cc-other-4 md:text-base">帶你深入探索有趣又獨特的旅遊體驗行程！</h6>
      </div>
    </div>
  </section>
</template>