<template>
    <button 
    class=""
    :class="{
    [`sl-button--${type}`]: type,
    }">
        <span>
            <slot />
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'sl-button',
})



// 想学一下如何抽取一个变量，然后在style里面使用

const sizes = reactive({
  small: '100px',
  medium: '150',
  large: '200'
})

// 如何把px单位变成变量呢？

</script>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ButtonProps } from './types'

defineProps<ButtonProps>();
</script>