<script setup lang="ts">
import style from '@/assets/variables.module.scss'

import { useTokenStore } from '@/stores/auth/token'
import { computed } from 'vue'

const tokenStore = useTokenStore()
const a = computed(() => tokenStore.accessToken)

console.log('home AuthToken 1', a.value)

const vFocus = {
  mounted: (el: HTMLElement) => {
    console.log('mounted', el)

    el.focus()
  }
}

const val = style

console.log('tes::::::::', style)
</script>

<template>
  <main>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    home
    <input v-focus />
    <div
      v-for="([key, value], i) in Object.entries(val)"
      :key="i"
      style="margin: 1rem; border: 1px solid red"
    >
      <p>key : {{ key }}</p>
      <p>value : {{ value }}</p>
    </div>
  </main>
</template>
