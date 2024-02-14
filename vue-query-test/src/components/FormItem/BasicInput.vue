<script setup lang="ts">
import { useSlots } from 'vue'
import { ElInput } from 'element-plus'

const slot = useSlots()

console.log('slot', slot)
</script>

<template>
  <ElInput>
    <!-- <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template> -->
  </ElInput>
</template>

<style scoped></style>
