<script lang="ts" setup>
import type { PropType } from "vue";
import { defineComponent, defineProps, withDefaults } from "vue";
import {
  type CardType,
  CardProp,
  CardTypecolor
} from "@/components/InfoCard/type";
import { reactive } from "vue";

const props = defineProps<{
  card_Data: CardProp[];
}>();
function getColor(
  stateToColorMap: { [state: string]: string } | undefined,
  state: string
): string {
  // 检查状态映射是否存在，如果存在，返回对应的颜色
  return stateToColorMap?.[state] || "默认颜色";
}
// 定义一个状态到颜色的映射
const stateToColor: { [state: string]: string } = {
  已取消: "红色",
  审批中: "绿色",
  已撤回: "蓝色",
  待处理: "灰色",
  已完成: "蓝色"
};
</script>
<template>
  <div id="app">
    <div
      class="content"
      v-for="(item, index) in props.card_Data"
      :key="item.id"
    >
      <div class="card-content  sl-position--relative">
        <div
          class="shenpi sl-positions--absolute"
          :class="{ [`sl-background--${item.color}`]: item.color }"
        >
          <p class="sl-text--italic">{{ item.accomplish }}</p>
        </div>
        <div class="card">
          <div class="absolute sl-icon--circle">
            <van-icon name="circle" />
            <span class="relative sl-icon--text">1</span>
          </div>

          <div class="card-title">
            <p class="">{{ item.title }}</p>
          </div>
          <div class="main-content sl-text--13">
            <p>{{ item.text }}</p>
            <p>
              当前环节：<span class="sl-text--green">{{ item.info }}</span>
            </p>
            <div class="sl-text--datatime float-right">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

.sl-background--blue {
  background: #00b58a;
}

.sl-background--red {
  background: #f56c6c;
}

.sl-background--gray {
  background: #909399;
}

.sl-icon--circle {
  left: 15px;
  top: 8px;
}
.sl-icon--text {
  right: 9px;
  font-size: 8px;
  top: -2px;
}
</style>
