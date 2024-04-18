<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeMount } from "vue";
import { GetInfoCard } from "@/hooks/useCardInfo";

// 获取审批管理卡片数据
const { examine_Data, handlerGetTodoList } = GetInfoCard();
interface Notice_Data {
  question_data: string;
  TaskList_data: number;
  text?: string;
}

const Notice_Datas: Notice_Data = reactive({
  question_data: "",
  TaskList_data: 0,
  text: "共有条待办数据"
});

// 把数据全部搞过来，搞一个对象。

const task = ref(true);

const onSubmit = values => {
  //
};

onMounted(() => {
  // 挂载之前的操作
  const { examine_Data } = GetInfoCard();
  // 把所有数据都拿过来。在进行判断。八个状态
  handlerGetTodoList(2);
});
onBeforeMount(() => {});
</script>

<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          @keyup.enter="onSubmit"
          center
          v-model="Notice_Datas.question_data"
          class="sl-field--content"
          left-icon="search"
          :border="true"
          placeholder="请输入问题描述"
        >
          <template #button>
            <van-button
              native-type="submit"
              class="sl-button--width"
              hairline
              size="small"
              type="primary"
              round
              >搜索</van-button
            >
          </template>
        </van-field>
        <div class="mt-2 mb-2">
          <p class="text-center text-sm font-normal">
            <van-icon name="notes-o" size="1.25rem" />
            <slot name="examine_totalCount">
              <!-- <span class="ml-1" v-if="task">
              共有<span class="text-sky-400">{{ ex.totalCount }}</span
              >条待办数据</span
            >
            <span class="ml-1" v-else>
              共有<span class="text-sky-400">{{ 123 }}</span
              >条处理任务</span> -->
            </slot>

            <!-- <span>{{`共有${123}条待办数据`}}</span> -->
          </p>
        </div>
        <van-divider
          :style="{
            color: '#FFFFFF',
            borderColor: '#E1E1E1',
            padding: '0 0',
            hairline: false
          }"
        />
      </van-cell-group>
    </van-form>
  </div>
</template>

<style scoped>
.van-cell ::v-deep.sl-field--content {
  height: 40px;
  margin-top: 15px;
  border-radius: 50px;
  background-color: #f7f8fa;
}

/* 深度选择器  */
.van-field :deep(.van-field__left-icon) {
  margin-left: 10px;
}

.van-field__body
  .van-field__button
  .van-button--hairline
  ::v-deep.sl-button--width {
  width: 50px;
  height: 30px;
}

/* 穿透的对象是要你自己定义的class属性。
   2. 穿透的前缀是 ::v-deep
    3. 穿透的对象是要你自己定义的class属性
*/
</style>
