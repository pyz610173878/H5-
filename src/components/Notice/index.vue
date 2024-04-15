<script setup lang="ts">
// 通知公告组件
import { reactive, ref, defineProps } from "vue";
import { type NoticeProps } from "./types";

const props = defineProps<{
  notice_data: NoticeProps[];
}>();
</script>
<template>
  <div id="app" class="mt-3">
    <!-- 解决不了，暂时先放着，真的想睡觉了。-->
    <div
      :class="{}"
      v-for="(item, index) in props.notice_data"
      :key="index"
      class="p-4 mt-2 bg-white content rounded-xl sl-position--relative"
    >
      <div class="notice sl-positions--absolute">
        <p
          class="text-white sl-text--italic h-9"
          :class="item.type === '未读' ? 'bg-gray-300' : 'sl-notice--type-blue'"
        >
          {{ item.type }}
        </p>
      </div>

      <div class="sl-notice--title flex items-center">
        <!-- 默认显示的东西 -->
        <slot name=icon :type="item.type">
          <!-- <p class="inline-block mr-1.5">
            <svg-icon
              :name="item.type === '未读' ? 'MynewsOpen' : 'MynewsClose'"
            />
          </p> -->
        </slot>
        <p class="text-sm sl-text--black inline-block">
          {{ item.title }}
        </p>
      </div>
      <div class="sl-notice--detail sl-text--gray">
        <span class="text-xs">
          <slot>
            {{ item.content }}
          </slot>
        </span>
        <span class="float-right sl-text--10 leading-6">
          {{ item.datatime }}
        </span>
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
  height: 30px;
  line-height: 17px;
}

.sl-notice--type-white {
  background-color: #cdcfd0;
}

.sl-notice--type-blue {
  background-color: #2d80ee;
}

.sl-notice--container-small {
  width: 351px;
  height: 67px;
  padding: 12px 0px 0px 0px;
}

.sl-notice--container-large {
  width: 351px;
  height: 73px;
  padding: 8px 16px 8px 16px;
  opacity: 0px;
}

.sl-text--title {
  position: absolute;
  top: 13px;
  right: 164px;
}
</style>
