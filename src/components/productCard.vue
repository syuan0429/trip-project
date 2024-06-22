<script setup>
import { defineProps } from 'vue'
defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  rate: {
    type: Number,
    default: 0
  },
  originPrice: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="border rounded-xl overflow-hidden">
    <div class="h-40">
      <img class="w-full h-40 object-cover" :src="image" alt="">
    </div>
    <div class="pt-2 px-3 pb-3 h-40 flex flex-col justify-between">
      <div>
        <h2 class="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-bold">{{ title }}</h2>
        <a-rate class="text-sm" :value="rate" disabled />
      </div>
      <div>
        <p v-if="originPrice" class="text-primaryGrey text-sm line-through">TWD ${{ originPrice }}</p>
        <span class="text-sm font-semibold">TWD ${{ price }}起</span>
        <a-tag class="text-center w-24 flex flex-col justify-between" v-if="label" color="error">{{ label }}</a-tag>
      </div>
    </div>
  </div>
</template>