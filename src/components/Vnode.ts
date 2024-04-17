import { ref, h } from "vue";
import { useSlots, useAttrs } from "vue";
import Vnode from "@/components/Vnode/index.vue";
export default {
  props: {
    /* ... */
  },
  setup(props, { slots }) {
    const count = ref(1);
    const _default = slots.default();
    const _slot1 = slots.slot2();
    const _slot2 = slots.slot3({ msg: "slot3" });
    // console.log(slots, "default");

    return () => {
      return [h("div", null, [..._default, ..._slot1, ..._slot2])];
    };
  }
};

// 可以是用 h渲染函数渲染一个组件。

// 第一个参数既可以是一个字符串
// (用于原生元素) 也可以是一个 Vue 组件定义。
// 第二个参数是要传递的 prop，第三个参数是子节点。
// 当创建一个组件的 vnode
// 时，子节点必须以插槽函数进行传递。
// 如果组件只有默认槽，可以使用单个插槽函数进行传递。否则，必须以插槽函数的对象形式来传递。
