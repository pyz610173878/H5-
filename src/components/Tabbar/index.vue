<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
      <span>
        <slot></slot>
      </span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: "主页",
    to: {
      name: "HomePage"
    }
  },
  {
    icon: "gem-o",
    title: "工作台",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "user-o",
    title: "我的",
    to: {
      name: "About"
    }
  }
]);
</script>
