<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { ref } from "vue";

const onClickRight = () => {
  useToggleDarkMode();
};
</script>

<template>
  <van-nav-bar
    fixed
    placeholder
    @click-right="onClickRight"
    title="质量管理系统"
  >
    <template #right>
      <svg-icon class="text-[18px]" :name="useDarkMode() ? 'light' : 'dark'" />
    </template>
  </van-nav-bar>
</template>

<style></style>
