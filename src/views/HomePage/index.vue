<template>
  <div class="" id="homepage">
    <Echart></Echart>
    <div class="mb-6"></div>
    <div>
      <Todoview :tabbarDatas="tabbarDatas" />
    </div>
    <div class="mt-6 w-full">
      <!-- 待办列表 -->

      <div class="w-2/4 inline-block">
        <ExamineDisplay :Examine_Data="Datass.Examine_Data" :column-num="2" />
      </div>

      <div class="w-1/4 inline-block">
        <ExamineDisplay
          :Examine_Data="Datas.Examine_Data"
          :column-num="1"
          :to="'/tasklist'"
        />
      </div>

      <div class="w-1/4 inline-block">
        <ExamineDisplay
          :Examine_Data="Dataes.Examine_Data"
          :column-num="1"
          :to="'/myreminder'"
        />
      </div>
    </div>

    <p class="mt-3 text-sm font-normal text-black">
      {{ HomePage.notice }}
    </p>

    <div>
      <van-skeleton :row="3" :loading="loading">
        <Notice :notice_data="Data.Notice_Data">
          <!-- <van-skeleton title :row="3" /> -->
        </Notice>
      </van-skeleton>
    </div>
  </div>
</template>
<script setup lang="ts" name="HomePage">
import {
  reactive,
  ref,
  onMounted,
  computed,
  onBeforeMount,
  getCurrentInstance
} from "vue";
import { useRouter, useRoute } from "vue-router";
import Todoview from "@/components/Todoview/index.vue";
import { getCode } from "@/utils/validate";
import { getUserCode } from "@/api/UserInfo";
import { useCachedViewStore } from "@/store/modules/cachedView";
import { getDatail, getDoneTask } from "@/api/UserInfo";
import Notice from "@/components/Notice/index.vue";
import { GetNoticeInfo } from "@/hooks/useNoticeinfo";
import { GetTabbarData } from "@/hooks/useTabbarData";
const { Data, handlerGetNoticeList } = GetNoticeInfo(); // 获取通知公告数据
const { tabbarDatas } = GetTabbarData(); // 获取tabbar数据

const loading = ref(true);

const store = useCachedViewStore();
//
const TabbarDatas = reactive([
  {
    icon: `/src/icons/svg/Bearing.svg`,
    title: "质量策划",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "/src/assets/Photos/control.png",
    title: "质量控制",
    to: {
      name: "Tools"
    },
    names: "质量控制"
  },
  {
    icon: "/src/assets/Photos/active.png",
    title: "质量活动",
    to: {
      name: "Tools"
    },
    names: "质量活动"
  },
  {
    icon: "/src/assets/Photos/check.png",
    title: "质量检查",
    to: {
      name: "Tools"
    },
    names: "质量检查"
  },
  {
    icon: "/src/assets/Photos/statistics.png",
    title: "特种统计",
    to: {
      name: "Tools"
    },
    names: "质量统计"
  },
  {
    icon: "/src/assets/Photos/equipment.png",
    title: "特种设备",
    to: {
      name: "Tools"
    },
    names: "特种设备管理"
  }
]);

//
const Datass = ref({
  Examine_Data: [
    { total: 5, type: ["待办", "待阅", "任务", "提醒"], name: "待办" },
    { total: 6, type: ["待办", "待阅", "任务", "提醒"], name: "待阅" }
  ]
});
//
const Datas = ref({
  Examine_Data: [{ total: 7, type: ["任务"], name: "任务管理" }]
});
//
const Dataes = ref({
  Examine_Data: [{ total: 10, type: ["提醒"], name: "提醒" }]
});

const HomePage = reactive({
  notice: "通知公告"
});

// 跳转name值

const DataRef = ref([
  "质量策划",
  "质量控制",
  "质量活动",
  "质量检查",
  "质量统计",
  "特种设备管理"
]);

setTimeout(() => {
  loading.value = false;
  // false  不进行显示
}, 1500);

onBeforeMount(() => {
  //   // 在这里执行挂载前的操作
  const store = useCachedViewStore();
  const { Data } = GetNoticeInfo();
  handlerGetNoticeList();
  // const codes = window.location.href;
  // store.Code = getCode(codes);
});

onMounted(() => {
  // const { Data } = GetNoticeInfo();
  // handlerGetNoticeList();
  // const result = getCode(code);
  // const store = useCachedViewStore();
  // store.Token = result;
});
</script>

<style scoped>
.van-cell ::v-deep.sl-field--content {
  border-radius: 50px;
  height: 32px;
}

.van-field ::v-deep.sl-field--content .van-field__left-icon {
  margin-left: 10px;
}

.w-87 {
  width: 87px;
}

#homepage {
  overflow-x: hidden;
}
</style>
