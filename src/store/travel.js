import { defineStore } from "pinia";
import { ref } from "vue";

export const useTravelStore = defineStore(
  "app",
  () => {
    const travelData = ref([]);
    const setTravelData = (data) => {
      travelData.value = data;
    };
    return { travelData, setTravelData };
  },
  {
    persist: true,
  }
);
