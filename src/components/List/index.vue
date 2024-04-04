<script setup lang="ts" name="List">
const props = defineProps({
  todo: Number,
  todos: Object
});
</script>
<template>
  <ul class="flex">
    <li class="flex-card">
      {{ todos.id }}
      <p>
        {{ todos.text }}
      </p>
    </li>
  </ul>
</template>
<style scoped>
.containers {
}

.flex-card {
  flex: 0 0 20%;
}
</style>
