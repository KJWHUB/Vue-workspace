<script lang="ts" setup>
import type { ElementPlusIconsVueStringLiteralType } from '@/lib/elementPlus'

interface Props {
  titleText?: string
  iconName?: ElementPlusIconsVueStringLiteralType
}

const props = withDefaults(defineProps<Props>(), {
  title: 'default title',
  iconName: 'SemiSelect'
})
</script>

<template>
  <el-icon size="16">
    <component :is="props.iconName" />
  </el-icon>
  <span class="title">{{ props.titleText }}</span>
</template>

<style scoped>
.title {
  margin-left: 10px;
  font-size: 16px;
}
</style>
