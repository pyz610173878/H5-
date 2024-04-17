<!-- eslint-disable vue/no-unused-vars -->
<template>
  <!-- 主页tabbar -->
  <van-tabbar
    v-model="active"
    :placeholder="true"
    :route="true"
    class="sl-tabbar"
  >
    <van-tabbar-item
      v-for="(item, index) in props.tabbarDatas"
      :key="item.id"
      :to="'/tools?name=' + item.title"
      v-bind="$attrs"
    >
      <!-- 待解决问题1 [Vue warn]: Property "index" was accessed during render but is not defined on instance -->
      <template #icon="">
        <!-- <img :src="item.icon" class="test1" /> -->
        <!-- {{ item.icon }} -->
        <svg-icon :name="item.icon" class="test1"></svg-icon>
      </template>
      <span class="text-slate-950 font-normal text-xs text-center">{{
        item.title
      }}</span>

      <!-- 这里在添加一个图标方式 -->
      <span>
        <slot></slot>
      </span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { type TabbarData } from "./types";

const props = defineProps<{
  tabbarDatas: TabbarData[];
}>();

const active = ref(0);
</script>

<style scoped>
.test1 {
  width: 45px;
  height: 45px;
}

/* ::v-deep usage as a combinator has been deprecated. Use  */
/* :deep(<inner-selector>) instead of ::v-deep <inner-selector> */
.sl-tabbar :deep(.van-tabbar--fixed) {
  position: static;
  height: 60px;
}
</style>
