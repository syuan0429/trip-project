import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore(
  "app",
  () => {
    const language = ref("zh-TW");
    const setLanguage = (lang) => {
      language.value = lang;
    };
    return { language, setLanguage };
  },
  {
    persist: true,
  }
);
