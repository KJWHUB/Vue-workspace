<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div>
    <span style="color: red">{{ props.text }}</span>
  </div>
</template>

<style scoped></style>
