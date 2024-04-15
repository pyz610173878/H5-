<script setup lang="ts" name="">
import { defineProps, defineEmits } from "vue";
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
const Data = reactive({});
const DataRef = ref();
const active = ref('');
onBeforeMount(() => {
  // 在这里执行挂载前的操作
  const route = useRoute(); //当前页面的路由信息比如 name path query等
  const { query } = route;
  // console.log(query.name);
  active.value = query.name
  
  
  // active.value.unshift(route.query.name as string);
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
    <NavBar title="任务管理" />
    <div>
      <van-tabs v-model:active="active">
        <FieldInput />
        <van-tab title="待处理" name="待处理">
          <!-- <infoCard :card_Data="Datas.card_Data" /> -->
        </van-tab>
        <van-tab title="处理中" name="处理中">
          <!-- 处理中数据 -->

        </van-tab>
        <van-tab title="已完成" name="已完成">
          <!-- 已完成数据 -->

        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped></style>
