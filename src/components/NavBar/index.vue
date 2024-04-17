<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { ref } from "vue";

const onClickRight = () => {
  useToggleDarkMode();
};
</script>

<template>
  <van-config-provider>
    <van-nav-bar
      fixed
      placeholder
      @click-right="onClickRight"
      title="技术管理系统"
      v-bind="$attrs"
      class="sl-nav--bar"
    >
      <span>
        <slot></slot>
      </span>
      <!-- 动态title如何实现的？ -->
      <template #right>
        <svg-icon
          class="text-[18px]"
          :name="useDarkMode() ? 'light' : 'dark'"
        />
      </template>
    </van-nav-bar>
  </van-config-provider>
</template>

<style></style>
