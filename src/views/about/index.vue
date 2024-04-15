<script setup lang="ts" name="About">
import {
  reactive,
  ref,
  onMounted,
  computed,
  onBeforeMount,
  getCurrentInstance
} from "vue";
import List from "@/components/List/index.vue";
import { useRouter } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
import ExamineDisplay from "@/components/Examine/ExamineDisplay.vue";
import { GetExamine } from "@/hooks/useCoustomGrid";
import Button from "@/components/Button/Button.vue";
import Vnode from "@/components/Vnode.js";
import Vnodes from "@/components/Vnode/index.vue";
const { List_Data, Examine_Data, handlerGetExamine, handlerGetTaskData } = GetExamine();

const test = ref("审批管理");
const number = ref(5);
const store = useCachedViewStore();

const Task_management = ref("任务管理");

const msg = ref("hello");
//   groceryList = ref([
//     { id: 1, text: "代办" },
//     { id: 2, text: "待阅" },
//     { id: 3, text: "已办" },
//     { id: 4, text: "已阅" },
//     { id: 5, text: "申请" }
//   ]),
//   test1 = ref("任务管理"),
const Task_Type = ref(["待处理", "处理中", "已完成"]);
const User_Data = reactive({
  user: [
    {
      errcode: 0 as number,
      userid: "" as string,
      mobile: "" as string,
      gender: "" as string,
      email: "" as string,
      avatar: "" as string,
      qr_code: "" as string,
      biz_mail: "" as string,
      address: "" as string,
      userNo: "" as string,
      qywxToken: "" as string
    }
  ]
});

//   groceryList3 = ref([
//     { id: 2, text: "我的提醒" },
//     { id: 2, text: "我的消息" }
//   ],
// )
// const Data = ref({
//   Examine_Data: [
//     { total: 5, type: ["待办", "待阅", "已办", "已阅"], name: "待办" },
//     { total: 6, type: ["待办", "待阅", "已办", "已阅"], name: "待阅" },
//     { total: 7, type: ["待办", "待阅", "已办", "已阅"], name: "已办" },
//     { total: 10, type: ["待办", "待阅", "已办", "已阅"], name: "已阅" }
//   ]
// });

onMounted(() => {
  // const { Data } = GetNoticeInfo();
  // handlerGetNoticeList();
  // const result = getCode(code);
  // const store = useCachedViewStore();
  // store.Token = result;
});

onBeforeMount(() => {
  const { List_Data } = GetExamine();
  handlerGetExamine();
  handlerGetTaskData();
  const { User_info } = store;
});

const test1 = ref("任务管理");
</script>

<template>
  <div class="pb-4 sl-user-container px-4">
    <div class="flex justify-between items-center  bg-white p-5 sl-user-car border-solid border-2 rounded-lg">
      <!-- 1. 个人信息页面  -->
      <div>
        <img :src="store.User_info.avatar" alt="" class="rounded-full w-11 h-11 mr-2" />
        <!-- 预留需求位置 -->
        <p class="font-normal text-black text-base leading-4">
          {{ store.User_info.userid }}
        </p>
        <p class="mt-1 sl-text--10">{{ store.User_info.userNo }}</p>
      </div>
      <div>
        <van-icon name="arrow" class="" />
      </div>
    </div>
  </div>
  <div class="pb-4 px-4">
    <div class="p-4 h-28 border-solid border-2 rounded-lg bg-white">
      <div>
        <p class="mb-2 font-bold text-base leading-4 text-black">
          {{ test }}
        </p>
      </div>
      <ExamineDisplay :Examine_Data="Examine_Data.Data" :column-num="5" />
    </div>
  </div>
  <div class="pb-4 px-4">
    <div class="bg-white p-4 h-28 border-solid border-2 rounded-lg">
      <p class="mb-4 font-bold text-base leading-4 text-black">
        {{ Task_management }}
      </p>
      <ExamineDisplay v-model="number"  :Examine_Data="List_Data.Task_Datas"
        :column-num="3" />
    </div>
  </div>

  <div class="pb-4 px-4">
    <div class="px-4 p-4 sl-user-car border-solid border-2 rounded-lg">
      <van-grid direction="horizontal" clickable :column-num="1" :border="false">
        <!-- <van-grid-item v-for="item in groceryList3" :key="item.id">
          <div>
            <p>{{ item.id }}</p>
            <p>{{ item.text }}</p>
          </div>
        </van-grid-item> -->

        <!-- <van-grid-item icon="arrow" text="路由跳转" to="/tools" />
        <van-grid-item icon="search" text="URL 跳转" url="https://github.com" /> -->
      </van-grid>
    </div>
  </div>
  <!-- <Vnodes>
    <template #default="{ title, content }">
      {{ title }}
      {{ content }}

    </template>
<template #header="headerProps">
      {{ headerProps.message }}
      {{ headerProps.count }}
      <h1>这是一个插槽</h1>
    </template>
</Vnodes> -->
</template>

<style scoped>
.sl-user-car {
  height: 91px;
}

ul {
  display: flex;
}
</style>
