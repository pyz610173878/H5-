<template>
  <van-config-provider>
    <van-tabbar v-model="active" :placeholder="true" :route="true" class="sl-tabbar">
      <van-tabbar-item v-for="(item, index) in tabbarDatas" :key="index" :to="item.to">
        <template #icon="">
          <img :src="item.icon" class="test1" />
        </template>
        <span class=" text-slate-950 font-normal text-xs text-center">{{ item.title }}</span>

        <!-- 这里在添加一个图标方式 -->
        <span>
          <slot></slot>
        </span>
      </van-tabbar-item>
    </van-tabbar>
  </van-config-provider>



</template>

<!--肯定有更加便捷的加载方式，但是我现在不知道，天啊。 -->
<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarDatas = reactive([
  {
    icon: `/src/assets/Photos/planning.png`,
    title: "质量检查",
    to: {
      name: "Check"
    }
  },
  {
    icon: "/src/assets/Photos/control.png",
    title: "质量活动",
    to: {
      name: "Active"
    }
  },
  {
    icon: "/src/assets/Photos/active.png",
    title: "质量策划",
    to: {
      name: "planning"
    }
  },
  {
    icon: "/src/assets/Photos/check.png",
    title: "质量控制",
    to: {
      name: "Active"
    }
  },
  {
    icon: "/src/assets/Photos/statistics.png",
    title: "特种设备",
    to: {
      name: "Active"
    }
  },
  {
    icon: "/src/assets/Photos/equipment.png",
    title: "特种设备",
    to: {
      name: "Active"
    }
  }
]);
</script>


<style scoped>
.test1 {
  width: 48px;
  height: 48px;
}

/* ::v-deep usage as a combinator has been deprecated. Use  */
/* :deep(<inner-selector>) instead of ::v-deep <inner-selector> */
.sl-tabbar ::v-deep .van-tabbar--fixed {
  position: static;
  margin-top: 25px;
}
</style>