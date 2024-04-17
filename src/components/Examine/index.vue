<script setup lang="ts">
// 待办 待阅 已办 已阅列表组件
import { defineProps, defineEmits } from "vue";
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  watch,
  computed,
  provide,
  defineModel
} from "vue";
import { type ExamineProps } from "@/components/Examine/types";
const Data = reactive({});
const DataRef = ref();

const props = defineProps<{
  Examine_Data: ExamineProps[];
}>();

onBeforeMount(() => {});

// 我通过控制展示组件，更改了子组件中定义的值。
watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<template>
  <div>
    <!-- <div @click="update">parent bound v-model is: {{ model }}</div> -->
    <van-grid :border="false" v-bind="$attrs">
      <van-grid-item
        :to="'/approvalList?name=' + item.name"
        text="文字"
        v-for="(item, index) in props.CustomGrid_Data"
        :key="index"
        v-bind="$attrs"
      >
        <!-- 现在笨一点的办法就是在写两个组件 -->
        <div>
          <p
            class="text-center text-center text-2xl leading-7 text-center font-bold text-black"
          >
            {{ item.total }}
          </p>
          <p :type="item.type[index]">{{ item.type[index] }}</p>
        </div>
      </van-grid-item>
      <!-- <van-grid-item to="/approvalList">
        <div>
          <p
            class="text-center text-2xl leading-7 text-center font-bold text-black"
          >
            3
          </p>
          <p>待阅</p>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div>
          <p
            class="text-center text-center text-2xl leading-7 text-center font-bold text-black"
          >
            3
          </p>
          <p>任务</p>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div>
          <p
            class="text-center text-center text-2xl leading-7 text-center font-bold text-black"
          >
            3
          </p>
          <p>提醒</p>
        </div>
      </van-grid-item> -->
    </van-grid>
  </div>
</template>

<style scoped></style>
