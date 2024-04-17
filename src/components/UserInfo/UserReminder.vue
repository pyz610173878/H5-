<template>
  <div class="h-1/2 py-4 bg-white flex justify-between items-center">
    <div class="flex">
      <slot name="IconTexts">
        <svg-icon name="planning" class="w-5 h-5 mr-2"></svg-icon>
        <p class="">我的提醒</p>
      </slot>
    </div>
    <div>
      <slot name="NumberIcons">
        <span>22</span>
        <van-icon name="arrow" class="" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";

import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
const Data = reactive({});
const DataRef = ref();
const store = useCachedViewStore();
onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<style scoped></style>
