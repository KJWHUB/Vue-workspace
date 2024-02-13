<script setup lang="ts">
import { ref, onMounted } from 'vue'

const rootRef = ref()
const textRef = ref('')

onMounted(() => {
  console.log('component-attr-test mounted')
  if (rootRef.value) {
    console.log(rootRef)
    console.log(rootRef.value)
  }
})
</script>

<template>
  <div style="border: 1px solid red" ref="rootRef">
    <h2>component-attr-test</h2>
    <p>{{ $attrs }}</p>
    <p>{{ textRef }}</p>
  </div>
</template>

<style scoped></style>
