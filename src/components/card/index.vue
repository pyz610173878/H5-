<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode"
import { ref } from "vue";
import { useCachedViewStore } from "@/store/modules/cachedView";

const onClickRight = () => {
  useToggleDarkMode();
};
const color = ref("green");
// 获取屏幕边界到安全区域距离
// const { safeAreaInsets } = uni.getSystemInfoSync()

</script>

<template>
  <div id="app">
    <div class="content">
      <div class="card-content sl-position--relative">
        <div class="shenpi sl-positions--absolute" :class="{
          [`sl-background--${color}`]: color,
        }">
          <p class="sl-text--italic ">审批中</p>
        </div>
        <div class="card">
          <div class="card-title text-sm ">
            <!-- <img src="" alt="" /> -->
            <p>炉顶烟气挡板门机械指针指示错误</p>
          </div>
          <div class="main-content sl-text--13">
            <p>流程类型：重要会议任务工作流程</p>
            <p>当前环节：<span class="sl-text--green">填写信息</span></p>
            <div class="sl-text--datatime">2023-04-15 18:00:01</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-title-color {
  color: #d14328;
}

.content {
  padding: 15px 15px;
  box-shadow: 0px 1px 8px 2px rgba(20, 20, 20, 0.08);
  background: rgba(255, 255, 255, 1);
}

.card-content {
  height: 92px;
  background-color: wheat;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  opacity: 0px;
  // gap: 4px;
}

.card {
  padding-left: 25px;
}

.card-title {
  margin-bottom: 5px;
}

.sl-background--green {
  background: #00b58a;
}

.shenpi {
  width: 48px;
  height: 48px;
}
</style>
