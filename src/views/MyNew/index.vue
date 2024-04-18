<script setup lang="ts" name="NyNew">
import { defineProps, defineEmits } from "vue";
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { NavBar } from '@/components/NavBar/index.vue';
import Notice from "@/components/Notice/index.vue";
import { GetNoticeInfo } from "@/hooks/useNoticeinfo";

const { Data, handlerGetNoticeList } = GetNoticeInfo();
// const Data = reactive({});
const DataRef = ref();

const active = ref("");
onBeforeMount(() => {
  // 在这里执行挂载前的操作
  const { Data } = GetNoticeInfo();
  handlerGetNoticeList();
});

onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<template>
  <div class="">
    <NavBar title="我的消息" />
    <van-tabs v-model:active="active">
      <div class="px-2">
        <van-tab title="全部" name="全部">
          <Notice :notice_data="Data.Notice_Data" />
        </van-tab>
        <van-tab title="已读" name="已读">
          <Notice :notice_data="Data.Notice_Data" />
        </van-tab>
        <van-tab title="未读" name="未读">
          <Notice :notice_data="Data.Notice_Data" />
        </van-tab>
      </div>
    </van-tabs>
  </div>
</template>

<style scoped></style>
