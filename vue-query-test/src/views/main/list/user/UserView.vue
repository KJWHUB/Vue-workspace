<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getTest, QUERY_KEY } from '@/api/test/test'

const { data, error } = useQuery({
  queryKey: [QUERY_KEY],
  queryFn: getTest
})

// const data = ref([])
// const dataSet = async () => {
//   try {
//     const res = await getTest()
//     data.value = res
//   } catch (error) {
//     console.log('error go', error)
//   }
// }
// console.log('er', error)

// const {data} = useTestQuery()
</script>

<template>
  <div>
    <h1>User</h1>
    <p>{{ error }}</p>
    <p>{{ JSON.stringify(data) }}</p>
  </div>
</template>

<style scoped></style>
