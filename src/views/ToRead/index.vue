<template>
    <div>
        <van-nav-bar left-text="" left-arrow @click-left="onClickLeft" />
        <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon" :to="item.to">
            {{ item.title }}
            <span>
                <slot></slot>
            </span>
        </van-tabbar-item>
    </div>
</template>
<script setup lang="ts">
const onClickLeft = () => history.back();
</script>


<style scoped></style>