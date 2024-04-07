<script setup lang="ts" name="Demo">
import { reactive, ref, onMounted } from "vue";
// import about from "@/views/about/index.vue";
// import Button from "@/components/Button/Button.vue";
import ECharts from "@/components/Echart/index.vue";
// import tabbar from "@/components/Tabbar/index.vue";
// import todoList from "@/components/TodoList/index.vue";
// import active from "@/views/quality/check/index.vue";
// import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import Todoview from "@/components/Todoview/index.vue";
// import slcard from "@/components/sl-card/index.vue";
// import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import Notice from "@/components/Notice/index.vue";
// const { gg2,Data } = useInfoCard();

// console.log(Data, 123123123);

const button_search = ref("搜索");

// const propss: CardProp = reactive({
//   card_Data: [{
//     id: 1,
//     title: '炉顶烟气挡板门机械指针指示错误',
//     text: "流程类型：重要会议任务工作流程",
//     info: "填写信息123",
//     time: '2023-04-15 18:00:01',
//     accomplish: "已完成"
//   }]
// })

// const { infoCardData } = categoryHook();

// console.log(infoCardData,'1231231');

// 路由实例和当前路由信息
const router = useRouter();
const route = useRoute(); //当前页面的路由信息比如 name path query等

// console.log(User, 1233);

// const infoCard_Data:InfoCardData = reactive({
//   card_Props: [
//     {
//       id: 1,
//       title: '炉顶烟气挡板门机械指针指示错误',
//       text: "流程类型：重要会议任务工作流程",
//       info: "填写信息",
//       time: '2023-04-15 18:00:01',
//       accomplish: "已完成"
//     },
//     {
//       id: 2,
//       title: '炉顶烟气挡板门机械指针指示错误',
//       text: "流程类型：重要会议任务工作流程123",
//       info: "填写信息",
//       time: '2023-04-15 18:00:01',
//       accomplish: "已撤回"

//     },
//     {
//       id: 3,
//       title: '炉顶烟气挡板门机械指针指示错误123',
//       text: "流程类型：重要会议任务工作流程3",
//       info: "填写信息",
//       time: '2023-04-15 18:00:01',
//       accomplish: "已取消"
//     },
//     {
//       id: 3,
//       title: '炉顶烟气挡板门机械指针指示错误123',
//       text: "流程类型：重要会议任务工作流程3",
//       info: "填写信息123",
//       time: '2023-04-15 18:00:01',
//       accomplish: "已审核"
//     }
//   ],
//   card: {
//     title: "最新公司 “质量文件标准” ",
//     desc: "最新公司 “质量文件标准” ",
//     num: "2023-04-15 18:00:01",
//   },
// })

// 现在问题来了，我的数据是后端返回的。我需要的是定义好数据类型。把后端返回的值传给数据结构。
console.log(123);

const test1 = () => {
  router.push({ name: "shenpi" });
};

// const ggg = ref('https:www.baidu.com');

// 现在的问题是，我的数据是后端返回的。我需要的是定义好数据类型。把后端返回的值传给数据结构。
// 那么我应该怎么做呢？
// 帮我看看这个问题。我应该怎么做呢？

// 帮我定一个 hooks，里面定义好数据类型。然后把后端返回的数据传给这个hooks。这样就可以了。

// 但是我现在的问题是，我应该怎么定义这个hooks呢？

onMounted(() => {
});
const value = ref("");
</script>

<template>
  <!-- 可以使用 CellGroup 作为容器 -->
  <van-cell-group inset >
    <van-field
    class="sl-field--content"
    left-icon="search"
    :border="true"
    v-model="value" placeholder="请输入问题描述" >
    <template #button>
      <button>搜索</button>
    </template>
      
      <!-- <van-button round type="primary">{{ button_search }}</van-button> -->
  </van-field>
  </van-cell-group >


  <!-- {{ test13 }}
  <button @click="test4">{{ test13 }}</button>
  <button @click="test4">{{ test134 }} 测试</button> -->
  <!-- 被解析成 span标签，然后值就是ref方法定义的 -->
  <!-- <svg-icon name="user" />
  <svg-icon name="work" /> -->
  <!-- <img :src="ggg"> -->
  <!-- <a :href="ggg">百度一下</a> -->
  <Echart></Echart>
  <!-- <Notice :notice_data="Data.Notice_Data" /> -->
  <!-- <Notice v-bind="Data.Notice_Data"/> -->
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
  <van-grid :border="false" :column-num="4">

    <van-grid-item to="/toread" text="文字">
      <div>
        <p class="text-center text-center text-2xl leading-7 text-center font-bold text-black">3</p>
        <p>待办</p>
      </div>
    </van-grid-item>
    <van-grid-item>
      <div>
        <p class="text-center text-2xl leading-7 text-center font-bold text-black">3</p>
        <p>待阅</p>
      </div>
    </van-grid-item>
    <van-grid-item>
      <div>
        <p class="text-center text-center text-2xl leading-7 text-center font-bold text-black">3</p>
        <p>任务</p>
      </div>
    </van-grid-item>
    <van-grid-item>
      <div>
        <p class="text-center text-center text-2xl leading-7 text-center font-bold text-black">3</p>
        <p>提醒</p>
      </div>
    </van-grid-item>
  </van-grid>

  <!-- <InfoCard :items="props.items" color="red"  title="{123}" /> -->



  <!-- <InfoCard v-bind="gg1.card_Datas" /> -->
  <!-- <InfoCard v-bind="gg2" @click="test1" /> -->

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

.van-cell ::v-deep.sl-field--content {
  background-color: wheat;
  border-radius: 50px;
  height: 32px;
}

.van-field ::v-deep.sl-field--content .van-field__left-icon {
  margin-left: 10px;
}
</style>
