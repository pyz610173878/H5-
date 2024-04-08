<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/Button/Button.vue";
import { reactive } from "vue";

const Notice_Data = reactive({
  question_data: ""
});

const onSubmit = (values) => {
      console.log('submit', values);
      console.log('submit', Notice_Data.question_data);
      
    };
</script>

<template>
  <div>
    <van-form @submit="onSubmit"
    >
      <van-cell-group inset>
        <van-field
          center
          v-model="Notice_Data.question_data"
          class="sl-field--content"
          left-icon="search"
          :border="true"
          placeholder="请输入问题描述"
        >
          <template #button>
            <van-button native-type="submit" class="sl-button--width" hairline size="small" type="primary" round>搜索</van-button>
          </template>
        </van-field>
        <div class="mt-2 mb-2">
        <p class="text-center">
          <span>共有{{}}条待办任务</span>
        </p>
      </div>
      </van-cell-group>
    </van-form>
  </div>
</template>

<style scoped>
.van-cell ::v-deep.sl-field--content {
  background-color: #f7f8fa;
  border-radius: 50px;
  height: 40px;
  margin-top: 15px;
}

.van-field ::v-deep.sl-field--content .van-field__left-icon {
  margin-left: 10px;
}

.van-field__body .van-field__button .van-button--hairline ::v-deep.sl-button--width  {
    width: 50px;
    height: 30px;
}

/* 穿透的对象是要你自己定义的class属性。
   2. 穿透的前缀是 ::v-deep
    3. 穿透的对象是要你自己定义的class属性
*/
</style>
