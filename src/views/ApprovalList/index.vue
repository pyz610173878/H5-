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

const { examine_Data, handlerGetTodoList, handlergetDoneTask } = GetInfoCard();

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

// 下一步呢？
const active = ref("");
const task = ref(false);

const test = ref("审批管理");

onMounted(() => {
  // 挂载之前的操作
  const route = useRoute(); //当前页面的路由信息比如 name path query等
  const { query } = route;
  active.value = query.name;
});
onBeforeMount(() => {
  const { examine_Data } = GetInfoCard();
  handlerGetTodoList(5);
  handlergetDoneTask(5);
  // 把数据全部拿过来
});

// 只展示4条最新的数据。
</script>
<template>
  <div>
    <NavBar :title="test" />
    <van-tabs v-model:active="active">
      <FieldInput>
        <template #examine_totalCount>
          <span class="ml-1">
            <!-- <svg-icon name="List_"/> -->
            共有<span class="text-sky-400">{{
              examine_Data.title_name[active]
            }}</span
            >条待办数据</span
          >
        </template>
      </FieldInput>
      <div class="mb-4"></div>
      <van-tab title="待办" name="待办">
        <infoCard :card_Data="examine_Data.card_Data" />
      </van-tab>
      <van-tab title="待阅" name="待阅"></van-tab>
      <van-tab title="已办" name="已办">
        <infoCard :card_Data="examine_Data.TaskDone_Data" />
      </van-tab>
      <van-tab title="已阅" name="已阅"></van-tab>
      <van-tab title="申请" name="申请"></van-tab>
    </van-tabs>

    <van-skeleton>
  <template #template>
    <div :style="{ display: 'flex', width: '100%' }">
      <van-skeleton-image />
      <div :style="{ flex: 1, marginLeft: '16px' }">
        <van-skeleton-paragraph row-width="60%" />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
      </div>
    </div>
  </template>
</van-skeleton>

  </div>
</template>
