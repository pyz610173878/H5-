<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";

interface Item {
  info?: string;
  time?: string;
  text?: string;
  title?: string;
  id?: number;
}

const props = defineProps<{
  items: Item[];
}>();
</script>

<template>
  <div id="app">
    <div class="content">
      <div class="card-content sl-position--relative">
        <div
          class="shenpi sl-positions--absolute"
          :class="{
            [`sl-background--${color}`]: color
          }"
        >
          <p class="sl-text--italic">审批中</p>
        </div>
        <div class="card">
          <div class="card-title text-sm">
            <!-- <img src="" alt="" /> -->
            <p>{{ title }}</p>
          </div>
          <div class="main-content sl-text--13">
            <p>{{ text }}</p>
            <p>
              当前环节：<span class="sl-text--green">{{ info }}</span>
            </p>
            <div class="sl-text--datatime">{{ time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.main-title-color {
  color: #d14328;
}

.content {
  padding: 15px 15px;
  box-shadow: 0px 1px 8px 2px rgba(20, 20, 20, 0.08);
  background: rgba(255, 255, 255, 1);
}

.card-content {
  height: 92px;
  background-color: wheat;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  opacity: 0px;
  // gap: 4px;
}

.card {
  padding-left: 25px;
}

.card-title {
  margin-bottom: 5px;
}

.sl-background--green {
  background: #00b58a;
}

.shenpi {
  width: 48px;
  height: 48px;
}
</style>
