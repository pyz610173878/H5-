<script setup lang="ts">
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { computed } from "vue";
import todoList from "@/components/TodoList/index.vue";
// import Card from "@/components/Card/index.vue";
</script>

<template>
  <!-- 路由页面跳转 -->
  <!-- <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view> -->
  <todoList />
</template>

<style lang="less" scoped></style>
