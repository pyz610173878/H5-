<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";
import infoCard from "@/components/InfoCard/index.vue";
import Tabbar from "@/components/Tabbar/index.vue";

const showList: string[] = reactive([]);

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
</script>

<template>
  <van-tabs v-model:active="active">
  <van-tab title="待办" to="todo">内容 1</van-tab>
  <van-tab title="待阅" to="toread">内容 2</van-tab>
  <van-tab title="已办" t0="todone">内容 3</van-tab>
  <van-tab title="已阅" to="read">内容 4</van-tab>
  <van-tab title="申请" to="applyfor">内容 4</van-tab>
</van-tabs>

  

  <!-- <Tabbar/>  -->
  <!-- 页面不能同时渲染两个 tabbar -->y
  <!-- <van-grid clickable :column-num="5">
    <van-grid-item  text="路由跳转" to="/read" />
    <van-grid-item text="URL 跳转" to="/todo" />
    <van-grid-item text="URL 跳转" to="/todone" />
    <van-grid-item text="URL 跳转" to="/toread" />
    <van-grid-item text="URL 跳转" to="/apllyfor" />
  </van-grid> -->




</template>
