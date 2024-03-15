<script setup lang="ts">
import MyCustomInput from '@/components/FormItem/MyCustomInput.vue'
</script>

<template>
  <div>
    <el-space>
      <el-input />
      <MyCustomInput :maxlength="10" />
    </el-space>
  </div>
</template>

<style scoped></style>
