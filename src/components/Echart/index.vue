<template>
  <div
    class="bg-white p-2 h-36 border-solid border--2 rounded-lg quality-control--container"
  >
    <p
      class="van-hairline--bottom font-normal text-base text-black leading-4 h-5"
    >
      {{ title }}
    </p>
    <div class="h-28 quality-control--chart mb-7">
      <v-chart class="" :option="option" autoresize />
    </div>
  </div>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";
import * as R from "ramda";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);
// 这个复用程度还是不高

// 已弃用：自 4.0 以来，labelLine 中的“正常”层次结构已被删除。
// 现在，所有样式属性都直接在 labelLine 中配置
const optionStlye = ref({
  fontSize: 14,
  color: "#202325",
  fontWeight: 500
});

provide(THEME_KEY, "light");
const option = ref({
  tooltip: {
    trigger: "item"
  },
  title: {
    left: 100
  },
  legend: {
    // 小方块 图例
    icon: "circle",
    orient: "vertical",
    top: "15%",
    align: "", // 设置文本水平居中
    // verticalAlign: 'middle', // 设置文本垂直居中
    // align: 'center',
    left: 150,
    itemGap: 8, // 高度间隔（上下间隔）
    itemWidth: 25, // 图标与文字之间的间隔
    itemHeight: 8, // 图标与文字的整体大小
    // height: 300,
    // 图例项的字体样式风格
    textStyle: {
      fontSize: 14, // 设置字体大小
      color: "#333", // 设置字体颜色
      // ... 其他样式
      rich: {
        // 通过富文本rich给每个项设置样式，下面的oneone、twotwo、threethree可以理解为"每一列"的样式
        oneone: {
          // 设置文字、数学、英语这一列的样式
          width: 35,
          color: optionStlye.value.color,
          fontSize: optionStlye.value.fontSize,
          fontWeight: optionStlye.value.fontWeight
        },
        twotwo: {
          // 设置10分、20分、30分这一列的样式
          width: 35,
          color: optionStlye.value.color,
          fontSize: optionStlye.value.fontSize,
          fontWeight: optionStlye.value.fontWeight
        },
        threethree: {
          // 设置百分比这一列的样式
          width: 35,
          color: optionStlye.value.color,
          fontSize: optionStlye.value.fontSize,
          fontWeight: optionStlye.value.fontWeight
        }
      }
    },
    formatter: function (name) {
      let rate = 100;
      for (let i = 0; i < datas.value.length; i++) {
        if (datas.value[i].name === name) {
          let percent = ((datas.value[i].value / seriesSum) * rate).toFixed(0);
          let number = datas.value[i].value;
          // return `${name}  ${number}  ${percent}%`;
          return `{oneone|${name}}          {twotwo|${number}分}   {threethree|${percent}%}`;
        }
      }
    }
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["60%", "70%"], // 内半径和外半径：一个向内扩展，一个向外扩展
      avoidLabelOverlap: false,
      center: ["15%", "45%"],
      padAngle: 10,
      itemStyle: {
        borderRadius: 10 //圆角角度
      },
      label: {
        show: false,
        position: "center",
        formatter: "{b} : {d}%" // 显示格式为“名称 : 百分比”
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: false,
        color: "#fff",
        fontSize: 10, // 设置字体大小
        lineHeight: 22, // 设置行高
        backgroundColor: "#333", // 设置背景颜色
        borderRadius: 4, // 设置圆角
        padding: [3, 4] // 设置内边距
      },
      data: [
        { value: 73, name: "未临日期", itemStyle: { color: "#1677ff" } },
        { value: 11, name: "已临日期", itemStyle: { color: "#FFBD41" } },
        { value: 22, name: "已过期", itemStyle: { color: "#FF7476" } }
      ]
    }
  ]
});
const datas = ref(option.value.series[0].data);
/* 计算测试数据总和 */
const seriesSum = R.reduce((acc, item) => acc + item.value, 0, datas.value);
const title = ref("临近日期");
</script>

<!-- 无法获取 DOM 宽度或高度。 -->
<!-- 请检查 dom.clientWidth 和 dom.clientHeight。它们不应为 0。例如，您可能需要在 window.onload 的回调中调用它 -->

<style scoped>
.chart {
  height: 40vh;
}

.quality-control--list {
  width: 351px;
}
</style>
