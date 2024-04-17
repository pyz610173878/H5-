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

// 切换tab页双向绑定数据

const active = ref("");
onBeforeMount(() => {
  // 在这里执行挂载前的操作
  const { Data } = GetNoticeInfo();
  handlerGetNoticeList();
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<template>
  <div class="">
    <NavBar title="我的提醒" />
    <div>
      <van-tabs v-model:active="active">
        <van-tab title="全部" name="全部">
          <Notice :notice_data="Data.Notice_Data" class="px-2">
            <template #icon="typeProps">
              <p class="inline-block mr-1.5">
                <svg-icon
                  :name="
                    typeProps.type === '未读' ? 'MynewsOpen' : 'MynewsClose'
                  "
                />
              </p>
            </template>
          </Notice>
        </van-tab>
        <van-tab title="已读" name="已读"> </van-tab>
        <van-tab title="未读" name="未读"> </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped></style>
