<template name="ToDone">
  <div>
    <van-tabs v-model:active="active" sticky>
      <van-tab title="待办" to="todo"></van-tab>
      <van-tab title="待阅" to="toread"></van-tab>
      <van-tab title="已办" t0="todone"></van-tab>
      <van-tab title="已阅" to="read"></van-tab>
      <van-tab title="申请" to="applyfor"></van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
//
</script>

<style scoped></style>
