<template>
  <div class="w-full h-28 px-4 rounded-lg bg-white">
    <div class="container">
      <UserMessage @click="test1">
        <template #IconText> </template>
      </UserMessage>
      <van-divider :style="{ color: '#f5f5f5', borderColor: '#f5f5f5' }" />
      <UserReminder></UserReminder>
    </div>

    <van-divider :style="{ color: '#f5f5f5', borderColor: '#f5f5f5' }" />
  </div>
</template>

<script setup lang="ts" name="">
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";

import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
import UserMessage from "./UserMessage.vue";
import UserReminder from "./UserReminder.vue";
const Data = reactive({});
const DataRef = ref();
const store = useCachedViewStore();

const test1 = (x: number) => {
  console.log(123);
};
onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<style scoped></style>
