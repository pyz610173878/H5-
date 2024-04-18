<template>
  <div>
    {{ rate }}
  </div>
</template>

<script setup lang='ts' name=''>
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from 'vue';

import { useRouter, useRoute } from 'vue-router';
import { useCachedViewStore } from '@/store/modules/cachedView';
import { start } from 'nprogress';
const Data = reactive({});
const DataRef = ref();
const store = useCachedViewStore();
onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

onMounted(() => {
  // 在这里执行挂载后的操作
});


interface Props {
  value?: Number,
  start?: String,
}
const props = withDefaults(defineProps<Props>(), {
  value: 5,
  start: "small"
});
// props存在默认值，就跟原型中的属性一样。

// 父组件传递值给子组件
// 子组件监听 props，进一步转换并进行渲染。

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
</script>

<style scoped></style>