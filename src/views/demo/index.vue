<script setup lang="ts" name="Demo">
import { reactive, ref } from "vue";
import Card from "@/components/Card/index.vue";
import about from "@/views/about/index.vue";
import Button from "@/components/Button/Button.vue";
import ECharts from "@/components/Echart/index.vue";
import tabbar from "@/components/Tabbar/index.vue";
import todoList from "@/components/TodoList/index.vue";
import active from "@/views/quality/check/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import Todoview from "@/components/Todoview/index.vue";
import slcard from "@/components/sl-card/index.vue";
import infocard from "@/components/InfoCard/index.vue";
import { computed } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { type CardProps } from "./types";
// 路由实例和当前路由信息
const router = useRouter()
const route = useRoute()  //当前页面的路由信息比如 name path query等

console.log(route, 123);
const User = {
  template: '<div>User</div>',
}


const test5: CardProps = reactive({
  id: 1,
  title: "炉顶烟气挡板门机械指针指示错误12311",
  text: "流程类型：重要会议任务工作流程",
  info: "填写信息123",
  time: "2023-04-15 18:00:01",
  accomplish: "已完成"
})

// console.log(User, 1233);

const test = reactive({
  card: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:01",

  },
  card1: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:01",

  },
  card2: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:01",

  },
  card3: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:01",

  },
})

const props: CardProps = reactive({
  items: [
    {
      id: 1,
      title: '炉顶烟气挡板门机械指针指示错误12311',
      text: "流程类型：重要会议任务工作流程",
      info: "填写信息123",
      time: '2023-04-15 18:00:01',
      accomplish: "已完成"
    },
    {
      id: 2,
      title: '炉顶烟气挡板门机械指针指示错误',
      text: "流程类型：重要会议任务工作流程123",
      info: "填写信息",
      time: '2023-04-15 18:00:01',
      accomplish: "已撤回"

    },
    {
      id: 3,
      title: '炉顶烟气挡板门机械指针指示错误123',
      text: "流程类型：重要会议任务工作流程3",
      info: "填写信息123",
      time: '2023-04-15 18:00:01',
      accomplish: "已取消"
    },
    {
      id: 3,
      title: '炉顶烟气挡板门机械指针指示错误123',
      text: "流程类型：重要会议任务工作流程3",
      info: "填写信息123",
      time: '2023-04-15 18:00:01',
      accomplish: "已审核"
    }
  ],
  card: {
    title: "最新公司 “质量文件标准” ",
    desc: "最新公司 “质量文件标准” ",
    num: "2023-04-15 18:00:01",

  },
})
// const todos = reactive([
//   {
//     id: 1,
//     title: '炉顶烟气挡板门机械指针指示错误12311',
//     text: "流程类型：重要会议任务工作流程",
//     info: "填写信息123",
//     time: '2023-04-15 18:00:01',
//     accomplish: "已完成"
//   },
//   {
//     id: 2,
//     title: '炉顶烟气挡板门机械指针指示错误',
//     text: "流程类型：重要会议任务工作流程123",
//     info: "填写信息",
//     time: '2023-04-15 18:00:01',
//     accomplish: "已撤回"

//   },
//   {
//     id: 3,
//     title: '炉顶烟气挡板门机械指针指示错误123',
//     text: "流程类型：重要会议任务工作流程3",
//     info: "填写信息123",
//     time: '2023-04-15 18:00:01',
//     accomplish: "已取消"
//   },
//   {
//     id: 3,
//     title: '炉顶烟气挡板门机械指针指示错误123',
//     text: "流程类型：重要会议任务工作流程3",
//     info: "填写信息123",
//     time: '2023-04-15 18:00:01',
//     accomplish: "已审核"
//   }
// ])




const test1 = () => {
  router.push({ name: 'ToDone' })
}
</script>

<template>
  <!-- <svg-icon name="user" />
  <svg-icon name="work" /> -->
  <Echart></Echart>
  <div class="mt-6">
    <!-- <Todoview /> -->
    <!-- <card /> -->
  </div>
  <!-- <div class="mt-6 w-full quality-control--list h-20 border-solid border-2 rounded-lg">
  </div> -->
  <!-- <card v-for="(todo, index) in todos" 
  :key="todo.id" 
  :title="todo.title" 
  :info="todo.info"
  :text="todo.text"
  :time="todo.time"
  @remove="todos.splice(index, 1)"
>

</card> -->
  <button class="" @click="test1">待办</button>

  <!-- <InfoCard :items="props.items" color="red"  title="{123}" /> -->
  <InfoCard v-bind="props" title="{123}" :test="props" color="red" />


  <!-- key = 为循环的次数 -->
  <!-- 属性被传递给了最外层的盒子。 -->
  <!-- <p class="text-4xl">12312</p> -->
  <!-- <div class="demo-content px-[12px]">
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    />
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a
        class="flex items-center"
        href="https://github.com/yulimchen/vue3-h5-template"
        target="_blank"
      >
        <svg-icon class="text-[20px] mr-[8px]" name="github" />
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
        <svg-icon class="text-[12px] ml-[5px]" name="link" />
      </a>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
        移动端项目基础模板
      </p>
    </div>
  </div> -->
</template>

<style scoped>
.content {
  padding: 10px 15px;
}
</style>