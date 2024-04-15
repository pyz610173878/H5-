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

  
      <div class="h-20 w-40">
      <slot>
      </slot>

      <slot name="slot1"></slot>

      <slot name="slot2" msg="hello world"></slot>
    
  </div>
    
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "vant";
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
  background-color: #2d80ee;
  width: 50px;
  margin-right: 5px;
}

.sl-button--text {
  color: #ffffff;
  font-weight: 400px;
  font-size: 12px;
  line-height: 16.8px;
}
</style>
