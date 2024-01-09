<script setup lang="ts">
import style from '@/assets/variables.module.scss'

const val = style

console.log('tes::::::::', style)
</script>

<template>
  <main>
    home
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
