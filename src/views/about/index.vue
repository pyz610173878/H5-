<script setup lang="ts" name="About">
import List from "@/components/List/index.vue";
import { ref, reactive } from "vue";

const test = ref("审批管理"),
  groceryList = ref([
    { id: 1, text: "代办" },
    { id: 2, text: "待阅" },
    { id: 3, text: "已办" },
    { id: 4, text: "已阅" },
    { id: 5, text: "申请" }
  ]),
  test1 = ref('任务管理'),
  groceryList1 = ref([
    { id: 1, text: "待办" },
    { id: 2, text: "已办" },
    { id: 3, text: "已办" }
  ]),
  groceryList3 = ref([
    { id: 22, text: "我的提醒" },
    { id: 22, text: "我的消息" },
  ])
</script>

<template>
  <div class="pb-6 sl-user-container px-4 ">
    <div class="p-4 sl-user-car border-solid border-2 rounded-lg">
      张三
    </div>

  </div>
  <div class="pb-6 px-4 ">
    <div class=" p-4 h-28 border-solid border-2 rounded-lg">
      <div>
        <p class=" mb-4 font-bold text-base leading-4 text-black">
          {{ test }}
        </p>
      </div>
      <van-grid :column-num="5" :border="false">
        <van-grid-item v-for="item in groceryList" :key="item.id">
          <div>
            <p class="text-2xl leading-7 text-center font-bold text-black">{{ item.id }}</p>
            <p class="text-xs font-normal text-black">{{ item.text }}</p>
          </div>
        </van-grid-item>
      </van-grid>

    </div>
  </div>
  <div class="pb-6 px-4 ">
    <div class="p-4 h-28 border-solid border-2 rounded-lg">
      <p class=" mb-4 font-bold text-base leading-4 text-black">
        {{ test1 }}
      </p>
      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in groceryList1" :key="item.id">
          <div>
            <p class="text-2xl leading-7 text-center font-bold text-black">{{ item.id }}</p>
            <p class="text-xs font-normal text-black">{{ item.text }}</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>

  <div class="pb-6 px-4 ">
    <div class=" px-4 p-4  sl-user-car border-solid border-2 rounded-lg">

      <van-grid direction="horizontal" clickable :column-num="1" :border="false">
        <van-grid-item v-for="item in groceryList3" :key="item.id">
          <div>
            <p>{{ item.id }}</p>
            <p>{{ item.text }}</p>
          </div>
        </van-grid-item>

        <!-- <van-grid-item icon="arrow" text="路由跳转" to="/tools" />
        <van-grid-item icon="search" text="URL 跳转" url="https://github.com" /> -->
      </van-grid>

    </div>
  </div>

</template>

<style scoped>
.sl-user-car {
  height: 91px;
}

ul {
  display: flex
}

li {}
</style>