<script setup lang="ts" name="Demo">
import { reactive, ref, onMounted, computed } from "vue";
// import about from "@/views/about/index.vue";
// import Button from "@/components/Button/Button.vue";
import ECharts from "@/components/Echart/index.vue";
// import tabbar from "@/components/Tabbar/index.vue";
// import todoList from "@/components/TodoList/index.vue";
// import active from "@/views/quality/check/index.vue";
// import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import Todoview from "@/components/Todoview/index.vue";

import { useRouter, useRoute } from "vue-router";
import Notice from "@/components/Notice/index.vue";
import { GetNoticeInfo } from "@/hooks/useNoticeinfo";

const { Data, handlerGetNoticeList } = GetNoticeInfo();

// 路由实例和当前路由信息
const router = useRouter();
const route = useRoute(); //当前页面的路由信息比如 name path query等

const test1 = () => {
  router.push({ name: "approvalList" });
};
const value1 = ref(1);
const double = computed<number>(() => {
  return value1.value * 2;
});
const TabbarDatas = reactive([
  {
    icon: `/src/assets/Photos/planning.png`,
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
    }
  },
  {
    icon: "/src/assets/Photos/active.png",
    title: "质量活动",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "/src/assets/Photos/check.png",
    title: "质量检查",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "/src/assets/Photos/statistics.png",
    title: "特种统计",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "/src/assets/Photos/equipment.png",
    title: "特种设备",
    to: {
      name: "Tools"
    }
  }
]);
const HomePage = reactive({
  notice: "通知公告"
});

onMounted(() => {
  const { Data } = GetNoticeInfo();
  handlerGetNoticeList();
});

</script>

<template>
  <div class="">
    <Echart></Echart>
    <div class="mb-8"></div>
    <div>
      <Todoview :tabbarDatas="TabbarDatas"/>
    </div>

    <!-- 我觉得是绝对定位的原因 -->

    <div class="mt-6 rounded-xl border-solid">
      <van-grid :border="false" :column-num="4">
        <van-grid-item to="/approvalList" text="文字">
          <div>
            <p class="text-center text-center text-2xl leading-7 text-center font-bold text-black">
              3
            </p>
            <p>待办</p>
          </div>
        </van-grid-item>
        <van-grid-item to="/approvalList">
          <div>
            <p class="text-center text-2xl leading-7 text-center font-bold text-black">
              3
            </p>
            <p>待阅</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div>
            <p class="text-center text-center text-2xl leading-7 text-center font-bold text-black">
              3
            </p>
            <p>任务</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div>
            <p class="text-center text-center text-2xl leading-7 text-center font-bold text-black">
              3
            </p>
            <p>提醒</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>

    <p class="mt-6 mb-2">{{ HomePage.notice }}</p>
    <div>
      <Notice :notice_data="Data.Notice_Data" />
    </div>
  </div>
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
