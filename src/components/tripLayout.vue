<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { GlobalOutlined } from '@ant-design/icons-vue'
import { useAppStore } from '@/store/app'
import { userApi } from '@/api/module/user'
import { message } from 'ant-design/icons-vue';
import { setToken, getToken } from '@/utils/localStorage'
import { tourStepProps } from 'ant-design-vue/es/tour/interface';

const appStore = useAppStore()
const { t } = useI18n()
const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const formState = reactive({
  username: '',
  password: ''
})
// TODO: 之後改成全局狀態
const isLogin = ref(getToken())
const visible = ref(false)
const { locale } = useI18n()
const languageList = ref([
  { locale: 'en-US', label: 'English' },
  { locale: 'zh-TW', label: '繁體中文' },
]);
const changeLanguage = (lang) => {
  locale.value = lang
  appStore.setLanguage(lang)
}
const setModalVisible = (bool) => {
  visible.value = bool
}

/*
  username: 'emilys'
  password: 'emilyspass'
  JWT
*/

const logout = () => {
  setToken('')
  message.success('登出成功')
  isLogin.value = false
}

const submit = async () => {
  const loginData = {
    username: formState.username,
    password: formState.password
  }
  try {
    const { token } = await userApi.login(loginData)
    if (token) {
      setToken(token)
      setModalVisible(false)
      message.success('登入成功')
      isLogin.value = tourStepProps
    }
  } catch(err) {
    message.error('使用者名稱或密碼錯誤')
  }
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
          <li v-if="!isLogin" class="mr-4 cursor-pointer" @click="setModalVisible(true)">{{ t('login') }}</li>
          <li v-else class="mr-4 cursor-pointer" @click="logout">{{ t('logout') }}</li>
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
    <a-modal v-model:open="visible" title="登入" centered :footer="null">
    <a-form :model="formState" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="submit">
      <a-form-item label="使用者名稱" name="username" :rules="[{ required: true, message: '請輸入使用者名稱' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密碼" name="password" :rules="[{ required: true, message: '請輸入密碼' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 10, span: 12 }">
        <a-button type="primary" html-type="submit">登入</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>