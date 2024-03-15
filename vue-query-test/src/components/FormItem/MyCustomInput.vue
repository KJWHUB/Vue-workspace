<script setup lang="ts">
import { ref, useAttrs } from 'vue'

const attrs = useAttrs()

const value = ref('')

console.log('attrs', attrs)
</script>

<template>
  <div class="wrapper">
    <el-input v-model="value" type="textarea" size="large" :maxlength="100" show-word-limit />
  </div>
</template>
