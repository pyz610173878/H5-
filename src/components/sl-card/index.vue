<script setup lang="ts">
import { h, ref, onMounted, useAttrs, computed, reactive } from "vue";
defineOptions({
  name: "Slcard" // 组件名
});

const attrs = useAttrs();
const filteredAttrs = computed(() => {
  return { ...attrs, class: undefined };
});
const test = reactive({
  card: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:01"
  },
  card1: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:05"
  },
  card2: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:03"
  }
});
</script>

<script lang="ts"></script>
<template>
  <div class="sl-card--content">
    <!-- <van-card v-bind="filteredAttrs" /> -->
    <!-- <van-card v-bind="$attrs" class="sl-card--card" /> -->
    <!-- 二次封装先放着，如何自定义添加属性与事件 -->
  </div>

  <!-- <div class="sl-card--content">
    <van-card v-bind="$attrs" class="sl-card--card">
        <template #num v-for="item in test">
            {{ item.num  }}
        </template>
        <template #footer>
        </template>
    </van-card>
</div> -->

  <div>
    <my-component
      v-for="(item, index) in test"
      :key="index"
      :data-prop="item.title"
    />
  </div>
</template>

<style scoped>
.sl-card--content {
  width: 321px;
  height: 91px;
}

.van-card ::v-deep.sl-card--card {
  padding: 8px 16px 8px 16px;
  background-color: wheat;
  border-radius: 10px;
}

.van-card ::v-deep.sl-card--card .van-card__header {
  padding-left: 25px;
}

.van-card__header ::v-deep.van-card__content {
  padding-left: 25px;
}
</style>
