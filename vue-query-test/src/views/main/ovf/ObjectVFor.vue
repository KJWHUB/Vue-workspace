<script setup lang="ts">
const objectData = {
  name: 'John',
  age: 30,
  email: 'email'
}
</script>

<template>
  <div>
    <h1>Object V-For</h1>

    <article v-for="(a, b) in objectData" :key="b + Math.random().toString()">
      <p>
        <span> a: {{ a }} </span>
        <span> b: {{ b }} </span>
      </p>
    </article>

    <hr />
    <article v-for="item in objectData" :key="item + Math.random().toString()">
      <p>
        {{ item }}
      </p>
    </article>
  </div>
</template>

<style scoped></style>
