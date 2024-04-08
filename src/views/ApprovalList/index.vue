<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive, ref } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";
import infoCard from "@/components/InfoCard/index.vue";
import Tabbar from "@/components/Tabbar/index.vue";
import { categoryHook } from "@/hooks/usedemo";
import { GetInfoCard } from "@/hooks/useCardInfo";
import FieldInput from "@/components/FieldInput/index.vue";
import { onMounted, onBeforeMount } from "vue";
import { type InfoData } from "@/hooks/usedemo";
import NavBar from "@/components/NavBar/index.vue";

const showList: string[] = reactive([]);

const { infoData, handlerGetCategory } = categoryHook();
const { Datas, handlerGetTodoList } = GetInfoCard();

const handleSuccessReq = async () => {
  const { list } = await getListApi();
  showSuccessToast("请求成功");
  showList.push(...list);
};
const handleErrorReq = () => {
  getListApiError().then(
    () => {},
    err => {
      console.log(err);
      showFailToast("请求有误");
    }
  );
};

const onClickLeft = () => history.back();

// const test1 = ref('')
const notice = reactive({
  待办: "对应接口数据",
  待阅: "对应接口数据",
  已办: "对应接口数据",
  已阅: "对应接口数据",
  申请: "对应接口数据"
});
const onChange = (status: string) => {
  console.log(status.name, "status");
  number1.value = notice[status.name] || "未知状态";
};
// 下一步呢？
const active = ref("")

const test = ref('审批管理')

onMounted(() => {
    // 未挂载之前就进行复制操作
    
});
onBeforeMount(() => {
  const { infoData } = categoryHook();
  // const { Datas } = GetInfoCard();
  handlerGetCategory();
  handlerGetTodoList();
});
</script>
<template>
  <div>

    <NavBar :title="test"/>
  <van-tabs v-model:active="active" @click-tab="onChange">
    <FieldInput />
    <van-tab title="待办" name="待办">
      <infoCard :card_Data="Datas.card_Data" />
    </van-tab>
    <van-tab title="待阅" name="待阅"></van-tab>
    <van-tab title="已办" name="已办"></van-tab>
    <van-tab title="已阅" name="已阅"></van-tab>
    <van-tab title="申请" name="申请"></van-tab>
  </van-tabs>
  
</div>
</template>
