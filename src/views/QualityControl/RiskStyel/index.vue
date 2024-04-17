<script setup lang="ts" name="">
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";

const Data = reactive({});
const DataRef = ref();
onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
