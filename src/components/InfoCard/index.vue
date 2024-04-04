<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import { type CardProps } from "./types";
import { reactive } from "vue";

const props = defineProps<{
  items: CardProps[];
}>();

// const props = defineProps<CardProps>();

console.log(props, "props123");



const propos = reactive<CardProps>(
  {
    id: 1,
    title: "炉顶烟气挡板门机械指针指示错误12311",
    text: "流程类型：重要会议任务工作流程",
    info: "填写信息123",
    time: "2023-04-15 18:00:01",
    accomplish: "已完成"
  }
);

const test11 = reactive({
  card: {
    id: 1,
    title: "炉顶烟气挡板门机械指针指示错误12311",
    text: "流程类型：重要会议任务工作流程",
    info: "填写信息123",
    time: "2023-04-15 18:00:01",
    accomplish: "已完成"
  },
})

console.log(test11, "test11");
console.log(propos, "propos");



// console.log(props, "props");

// 定义一个接口来描述状态到颜色的映射
// interface StateColorMap {
//   状态1: string;
//   状态2: string;
//   状态3: string;
//   状态4: string;
//   状态5: string;
// }

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

const test22 = (x) => {
  return x + 3;
};
// 感觉这样是多余的。因为传递过来的数据应该就是已经被处理好了的。我们直接在父组件中把处理好的数据传递过来就好了。
// 而不是在子组件中再去处理一次。

</script>
<template>
  <div id="app">
    <div class="content" v-for="(item, index) in props.items" :key="item.id">
      <div class="card-content sl-position--relative">
        <div class="shenpi sl-positions--absolute"
          :class="{[`sl-background--${item.color}`]: item.color}"
        >
          <!-- :class="{[`sl-background--${getColor(stateToColor,item.accomplish)}`]: color}" -->
          <p class="sl-text--italic">{{ item.accomplish }}</p>
        </div>
        <div class="card">
          <div class="card-title text-sm">
            <!-- <img src="" alt="" /> -->
            <p>{{ item.title }}</p>
          </div>
          <div class="main-content sl-text--13">
            <p>{{ item.text }}</p>
            <p>
              当前环节：<span class="sl-text--green">{{ item.info }}</span>
            </p>
            <div class="sl-text--datatime">{{ item.time }}</div>
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
</style>
