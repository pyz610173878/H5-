<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab title="待办" to="todo"></van-tab>
      <van-tab title="待阅" to="toread"></van-tab>
      <van-tab title="已办" t0="todone"></van-tab>
      <van-tab title="已阅" to="read"></van-tab>
      <van-tab title="申请" to="applyfor"></van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts" name="ToRead">
// const onClickLeft = () => history.back();
</script>

<style scoped></style>
