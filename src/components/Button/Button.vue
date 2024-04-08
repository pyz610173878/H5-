<template>
  <button
    class="sl-button"
    :class="{
      [`sl-button--${type}`]: type,
      [`sl-button--${size}`]: size
    }"
  >
    <span class="sl-button--text">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from 'vant';
export default defineComponent({
  name: "sl-button"
});

// 想学一下如何抽取一个变量，然后在style里面使用

const size = reactive({
  small: "100px",
  medium: "150px",
  large: "200px"
});

// 如何把px单位变成变量呢？
</script>

<script setup lang="ts">

import { reactive, ref } from "vue";
import type { ButtonProps } from "./types";

defineProps<ButtonProps>();

</script>


<style>
.sl-button {
  border-radius: 50px;
  background-color:#2D80EE;
  width: 50px;
  margin-right: 5px;
}

.sl-button--text {
  color: #FFFFFF;
  font-weight: 400px;
  font-size: 12px;
  line-height: 16.8px
}
</style>