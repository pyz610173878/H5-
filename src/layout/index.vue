<script setup lang="ts">
import tabbar from "@/components/Tabbar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import { computed } from "vue";
// import Card from "@/components/Card/index.vue";

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
</script>

<template>
  <div class="app-wrapper px-3 pt-3">
    <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'">
      <nav-bar />
      <!-- 这里的知识点还需要学习一下。 -->
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- 路由页面跳转 -->
      <!-- include 属性：这个属性是一个字符串数组，指定要缓存的组件名称。在这个例子中，只有名为 a 和 b 的组件会被缓存。
        这意味着任何不在 a 和 b 之外的组件都不会被缓存。 -->
        <!--  -->
      <tabbar />
    </van-config-provider>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
