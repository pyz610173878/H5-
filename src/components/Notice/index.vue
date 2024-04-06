<script setup lang="ts">
import { reactive, ref, defineProps } from "vue";
import { type NoticeProps } from "./types";

const props = defineProps<{
  notice_data: NoticeProps[];
}>();
</script>
<template>
  <div id="app">
    <!--  -->
    <div
      v-for="(item, index) in props.notice_data"
      :key="item.id"
      class="content mb-4 rounded-xl sl-position--relative"
    >
      <div class="notice sl-positions--absolute">
        <!-- 主题部分 -->
        <p class="sl-text--italic height">{{ item.type }}</p>
      </div>

      <div class="sl-notice--title text-sm">
        <p class="text-sm sl-text--black">{{ item.title }}</p>
      </div>
      <div class="sl-notice--detail sl-text--gray">
        <span class="text-xs">{{ item.content }}</span>
        <span class="float-right sl-text--10 leading-6">{{
          item.datatime
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notice {
  width: 48px;
  height: 48px;
}
.content {
  height: 67px;
}
.height {
  height: 4.8vw;
  line-height: 4.1vw;
}
</style>
