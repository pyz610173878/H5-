<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive, ref } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";
import infoCard from "@/components/InfoCard/index.vue";
import Tabbar from "@/components/Tabbar/index.vue";
import {categoryHook} from "@/hooks/usedemo";
import {GetInfoCard} from "@/hooks/useCardInfo";
import { onMounted,onBeforeMount } from "vue";
import {type InfoData} from "@/hooks/usedemo";

const showList: string[] = reactive([]);

const {infoData, test1,handlerGetCategory} = categoryHook();
const {Datas,handlerGetTodoList} = GetInfoCard();


const handleSuccessReq = async () => {
  const { list } = await getListApi();
  showSuccessToast("请求成功");
  showList.push(...list);
};
const handleErrorReq = () => {
  getListApiError().then(
    () => { },
    err => {
      console.log(err);
      showFailToast("请求有误");
    }
  );
};

const props = reactive({
  items: [
    {
      id: 1,
      title: "炉顶烟气挡板门机械指针指示错误12311",
      text: "流程类型：重要会议任务工作流程",
      info: "填写信息123",
      time: "2023-04-15 18:00:01",
      accomplish: "已完成"
    },
    {
      id: 2,
      title: "炉顶烟气挡板门机械指针指示错误123",
      text: "流程类型：重要会议任务工作流程3",
      info: "填写信息123",
      time: "2023-04-15 18:00:01",
      accomplish: "已取消"
    }
  ]
});
const onClickLeft = () => history.back();
const active = ref("待办");
const number1 = ref(0);


const handler_Data = () => {
  return number1.value++
}
// const test1 = ref('')
const notice = reactive({
  "待办": '对应接口数据',
  "待阅": '对应接口数据',
  "已办": '对应接口数据',
  "已阅": '对应接口数据',
  "申请": '对应接口数据'
})


// interface CategoryOption {
//   category_name: string;
//   children?: string;
//   id: number;
//   parent_id: null;
// }

// interface InfoData {
//   category_options: CategoryOption[];
// }

// /** 自定义hook */
// const infoData: InfoData = reactive({
//   category_options: [
//     {
//       category_name: '123',
//       children: "string",
//       id: 123,
//       parent_id: null
//     }
//   ],
// });


// console.log(ggboy,123312);


const infoDatas: InfoData = ref({
    category_options: [{
      category_name: '123',
      children: "string",
      id: 1123123111,
      parent_id: null
    }],
  });

  const infoDataes: InfoData = reactive({
    category_options: [{
      category_name: '123',
      children: "string",
      id: 1123123111,
      parent_id: null
    }],
  });


  console.log(infoDatas.value.category_options, 'infoData123');
  console.log(infoDataes.category_options, 'infoData');
const onChange = (status: string) => {
  console.log(status.name, 'status');

  number1.value = notice[status.name] || '未知状态';
};
// 下一步呢？

onMounted(() => {


  // handleSuccessReq();
  // handleErrorReq();
});

onBeforeMount(() => {
  const {infoData} = categoryHook();
  const {gg2} = GetInfoCard();
  handlerGetCategory();
  handlerGetTodoList();

})
</script>
<template>
  {{test1 }}

  {{ infoDatas  }}
  <van-tabs v-model:active="active" @click-tab="onChange">
    <van-tab title="待办" name="待办">
      <infoCard :card_Data="Datas.card_Data" />

    </van-tab>
    <van-tab title="待阅" name="接口地址"></van-tab>
    <van-tab title="已办" name="已办"></van-tab>
    <van-tab title="已阅" name="已阅"></van-tab>
    <van-tab title="申请" name="申请"></van-tab>
  </van-tabs>
  <!-- <Tabbar/>  -->
  <!-- 页面不能同时渲染两个 tabbar -->
  <!-- <van-grid clickable :column-num="5">
    <van-grid-item  text="路由跳转" to="/read" />
    <van-grid-item text="URL 跳转" to="/todo" />
    <van-grid-item text="URL 跳转" to="/todone" />
    <van-grid-item text="URL 跳转" to="/toread" />
    <van-grid-item text="URL 跳转" to="/apllyfor" />
  </van-grid> -->




</template>
