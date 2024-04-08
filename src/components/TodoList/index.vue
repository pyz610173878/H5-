<template>
  <van-tabbar
    v-model="active"
    :placeholder="true"
    :route="true"
    class="sl-tabbar"
  >
    <van-tabbar-item
      v-for="(item, index) in props.tabbarDatas"
      :key="index"
      :to="item.to"
    >
      <template #icon="">
        <img :src="item.icon" class="test1" />
      </template>
      <span class="text-slate-950 font-normal text-xs text-center">{{
        item.title
      }}</span>

      <!-- 这里在添加一个图标方式 -->
      <span>
        <slot></slot>
      </span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<!--肯定有更加便捷的加载方式，但是我现在不知道，天啊。 -->
<script setup lang="ts">
import { ref, reactive,defineProps } from "vue";
import {type TabbarData} from './types';

const props = defineProps<{
  tabbarDatas: TabbarData[];
}>();

const active = ref(0);

</script>

<style scoped>
.test1 {
  width: 48px;
  height: 48px;
}

/* ::v-deep usage as a combinator has been deprecated. Use  */
/* :deep(<inner-selector>) instead of ::v-deep <inner-selector> */
.sl-tabbar :deep(.van-tabbar--fixed) {
  position: static;
  height: 60px;
}
</style>
