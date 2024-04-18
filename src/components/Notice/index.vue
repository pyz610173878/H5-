<script setup lang="ts">
// 通知公告组件
import { reactive, ref, defineProps } from "vue";
import { type NoticeProps } from "./types";

const props = defineProps<{
  notice_data: NoticeProps[];
}>();
</script>
<template>
  <div id="app" class="mt-3 ">
    <div
      :class="{}"
      v-for="(item, index) in props.notice_data"
      :key="index"
      class="relative h-16 p-4 mt-2 rounded-xl bg-white"
    >
      <div class="w-12 h-12 sl-positions--absolute">
        <p
          class="h-9 sl-text--italic text-white"
          :class="item.type === '未读' ? 'bg-gray-300' : 'sl-notice--type-blue'"
        >
          {{ item.type }}
        </p>
      </div>

      <div class="flex items-center sl-notice--title">
        <!-- 默认显示的东西 -->
        <slot name="icon" :type="item.type">
          <!-- <p class="inline-block mr-1.5">
            <svg-icon
              :name="item.type === '未读' ? 'MynewsOpen' : 'MynewsClose'"
            />
          </p> -->
        </slot>
        <p class="inline-block text-sm sl-text--black ">
          {{ item.title }}
        </p>
      </div>
      <div class=" sl-text--gray">
        <span class="text-xs">
          <slot>
            {{ item.content }}
          </slot>
        </span>
        <span class="float-right leading-6 sl--text-10 ">
          {{ item.datatime }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.sl-notice--type-white {
  background-color: #cdcfd0;
}

.sl-notice--type-blue {
  background-color: #2d80ee;
}

.sl-text--title {
  position: absolute;
  top: 13px;
  right: 164px;
}
</style>
