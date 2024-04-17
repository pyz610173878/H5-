<script setup lang="ts" name="ExamineDisplay">
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

// 这个函数通用性不高。假设你要跳转 十几个页面呢？
// 难道你写 十几个if else？还要进行进行抽离。
const test1 = (item, index) => {
  if (item.type.length > 3) {
    return "/approvalList?name=";
  } else {
    return "/tasklist?name=";
  }
};
onBeforeMount(() => {});

const model = defineModel();

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
        text="文字"
        v-for="(item, index) in props.Examine_Data"
        :key="index"
        :to="test1(item, index) + item.type[index]"
        v-bind="$attrs"
      >
        <!-- v-bind=$attrs 必须要放最后，否则无法继承第三方组件的属性与方法 -->
        <!-- 路由地址不应该写死，先放着吧。已经浪费太久了。  -->
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
