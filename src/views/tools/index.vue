<script setup lang="ts" name="">
import { defineProps, defineEmits } from "vue";
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import Todoview from "@/components/Todoview/index.vue";
const quality_Data = reactive({
  planning: '质量策划',
  control: '质量控制',
  active: '质量活动',
  check: '质量检查',
  statistics: '质量统计',
  equipment: '特种设备管理',
});
const DataRef = ref();
const activeNames = ref(['0']);

const TabbarDatas = reactive([
    {
      icon: `/src/assets/Photos/Qualityplannings.png`,
      title: "质量规划",
      to: {
        name: "Planning"
      }
    },
    {
      icon: "/src/assets/Photos/QualityEye.png",
      title: "质量计划",
      to: {
        name: "Control"
      }
    },
    {
      icon: "/src/assets/Photos/Qualityplanning.png",
      title: "质量策划",
      to: {
        name: "Active"
      }
    },
    // {
    //   icon: "/src/assets/Photos/check.png",
    //   title: "质量检查",
    //   to: {
    //     name: "Check"
    //   }
    // },
    // {
    //   icon: "/src/assets/Photos/statistics.png",
    //   title: "特种统计",
    //   to: {
    //     name: "Statistics"
    //   }
    // },
    // {
    //   icon: "/src/assets/Photos/equipment.png",
    //   title: "特种设备",
    //   to: {
    //     name: "Equipment"
    //   }
    // }
  ]);
onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<template>
  <div>
    <van-collapse v-model="activeNames" :v-for="(index in quality_Data)">

      <van-collapse-item :border="false" :title="quality_Data.planning" name="1"
      class="sl-collapse--item"
      >
        <template #title>
          <div class="">{{ quality_Data.planning }}</div>
        </template>
        <Todoview :tabbarDatas="TabbarDatas" />
      </van-collapse-item>
      <van-collapse-item :title="quality_Data.control" name="2">
        。<template #title>
          <div class="">{{ quality_Data.control }}</div>
        </template>
      </van-collapse-item>
      <van-collapse-item :title="quality_Data.active" name="3">
        <template #title>
          <div class="">{{ quality_Data.active }}</div>
        </template>
      </van-collapse-item>
      <van-collapse-item :title="quality_Data.check" name="4">
        <template #title>
          <div class="">{{ quality_Data.check }}</div>
        </template>
      </van-collapse-item>
      <van-collapse-item :title="quality_Data.statistics" name="5">
        <template #title>
          <div class="">{{ quality_Data.statistics }}</div>
        </template>
      </van-collapse-item>
      <van-collapse-item :title="quality_Data.equipment" name="6">
        <template #title>
          <div class="">{{ quality_Data.equipment }}</div>
        </template>
      </van-collapse-item>
    </van-collapse>

  </div>
</template>

<style scoped>
.van-collapse .van-collapse-item .sl-collapse--item .van-cell::v-deep.van-cell--clickable {
  background-color: wheat;
  border-radius: 8px;
  margin-bottom: 10px;
}
.van-collapse-item .van-cell--clickable ::v-deep.sl-collapse--item {
  background-color: wheat;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
