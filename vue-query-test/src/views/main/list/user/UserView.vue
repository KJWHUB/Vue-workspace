<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getTest, QUERY_KEY } from '@/api/test/test'

const { data, error } = useQuery({
  queryKey: [QUERY_KEY],
  queryFn: getTest
})

// 동적 임포트
const dymicImport = import('../product/ProductView.vue')
console.log('dymicImport:', dymicImport)
</script>

<template>
  <div>
    <h1>User</h1>
    <p>{{ error }}</p>
    <p>{{ JSON.stringify(data) }}</p>
    <h2>스타일 태그에 module 옵션이 있어야만 $style 에 접근 가능</h2>
    <p>{{ JSON.stringify($style) }}</p>
    <article class="add">add</article>
    <input type="file" />
    <input type="text" name="" id="" />
  </div>
</template>

<style module scoped>
.add {
  content: '++++++++';
  color: red;
  font-size: large;
}

:export {
  open: 1;
}
</style>
