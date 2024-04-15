<script setup lang="ts" name="">
import { defineProps, defineEmits } from "vue";
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
  <div>
    <!-- <van-tabs v-model:active="active" @click-tab="onChange">
    <FieldInput />
    <van-tab title="待办" name="待办">
      <infoCard :card_Data="Datas.card_Data" />
    </van-tab>
    <van-tab title="待阅" name="待阅"></van-tab>
    <van-tab title="已办" name="已办"></van-tab>
    <van-tab title="已阅" name="已阅"></van-tab>
    <van-tab title="申请" name="申请"></van-tab>
  </van-tabs> -->
  </div>
</template>

<style scoped></style>
