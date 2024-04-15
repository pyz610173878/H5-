<!--
 * @Author: hacker 610173878@qq.com
 * @Date: 2024-04-11 19:12:01
 * @LastEditors: hacker 610173878@qq.com
 * @LastEditTime: 2024-04-12 10:04:56
 * @FilePath: \H5-\src\views\BlankPage\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup lang="ts" name="">
import { defineProps, defineEmits } from "vue";
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { getCode } from "@/utils/validate";
import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
import { getUserCode } from "@/api/UserInfo";
const router = useRouter();
const store = useCachedViewStore();
const Data = reactive({});
const DataRef = ref();
const navigateToHomePage = () => {
  router.push({ path: "/homepage" });
};
onBeforeMount(() => {
  // 在这里执行挂载前的操作

  const GetUserCode = () => {
    const codes = window.location.href;
    const code = getCode(codes);
    getUserCode(code).then(res => {
      console.log(res, "res");
      const data = res.data;
      console.log(data, "data");

      store.User_info = data;
      // 要把这个 data 对象存储到 pinna 中。
      console.log(store.User_info.qywxToken, "Token123");
      console.log(store.User_info, "用户信息");
    });
  };
    // GetUserCode()
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
  navigateToHomePage()
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
