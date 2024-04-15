<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive, ref } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";
import { useRouter, useRoute } from "vue-router";
import infoCard from "@/components/InfoCard/index.vue";
import Tabbar from "@/components/Tabbar/index.vue";
import { GetInfoCard } from "@/hooks/useCardInfo";
import FieldInput from "@/components/FieldInput/index.vue";
import { onMounted, onBeforeMount } from "vue";
import NavBar from "@/components/NavBar/index.vue";

const showList: string[] = reactive([]);

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
      //
      showFailToast("请求有误");
    }
  );
};

const onClickLeft = () => history.back();

const notice = reactive({
  待办: "对应接口数据",
  待阅: "对应接口数据",
  已办: "对应接口数据",
  已阅: "对应接口数据",
  申请: "对应接口数据"
});
// 下一步呢？
const active = ref("");

const test = ref("审批管理");

onMounted(() => {
  // 挂载之前的操作
  const route = useRoute(); //当前页面的路由信息比如 name path query等
  const { query } = route;
  active.value = query.name;
});
onBeforeMount(() => {
  // const { Datas } = GetInfoCard();
  handlerGetTodoList(5);
});
</script>
<template>
  <div>
    <NavBar :title="test" />
    <van-tabs v-model:active="active" >
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
