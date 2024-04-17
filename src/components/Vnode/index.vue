<script setup lang="ts" name="">
import { defineProps, defineEmits } from "vue";
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";

import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
const DataRef = ref();
const Data = ref({
  CustomGrid_Data: [
    { total: 5, type: ["待办", "待阅", "已办", "已阅"], name: "待办" },
    { total: 6, type: ["待办", "待阅", "已办", "已阅"], name: "待阅" },
    { total: 7, type: ["待办", "待阅", "已办", "已阅"], name: "已办" },
    { total: 10, type: ["待办", "待阅", "已办", "已阅"], name: "已阅" }
  ]
});
const store = useCachedViewStore();
onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
});

const title1 = ref("编码人生");
const title2 = ref("Vue3技术细节");
</script>

<template>
  <div class="border-collapse">
    北京时间:2024-09-09 09:09:09

    <slot name="header" message="hello" :count="2">
      <h1>header插槽</h1>
    </slot>
    <span>
      <slot title="编码人生" content="我的未来"> 默认插槽 </slot>
    </span>
  </div>
</template>

<style scoped></style>
