<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
