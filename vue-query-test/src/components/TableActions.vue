<script setup lang="ts">
const props = defineProps<{
  action: () => void
  loading: boolean
}>()
</script>

<template>
  <el-button @click="props.action" :loading="props.loading" type="warning">Delete Post</el-button>
</template>

<style scoped></style>
