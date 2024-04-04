<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";
import infoCard from "@/components/InfoCard/index.vue";

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
      title: '炉顶烟气挡板门机械指针指示错误12311',
      text: "流程类型：重要会议任务工作流程",
      info: "填写信息123",
      time: '2023-04-15 18:00:01',
      accomplish: "已完成"
    },
    {
      id: 2,
      title: '炉顶烟气挡板门机械指针指示错误123',
      text: "流程类型：重要会议任务工作流程3",
      info: "填写信息123",
      time: '2023-04-15 18:00:01',
      accomplish: "已取消"
    },
  ],
})


</script>

<template>
  <info-card :items="props.items" color="red" />
</template>
