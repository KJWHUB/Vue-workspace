<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <RouterView />
  <VueQueryDevtools position="right" buttonPosition="bottom-right" />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
}
nav {
  width: 100%;
  font-size: 30px;
  text-align: center;
  margin: 5rem 0;
}

nav a.router-link-exact-active {
  color: blue;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: rgba(0, 0, 0, 0.2);

  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.custom-nav {
  background-color: #fff;
  a {
    padding: 1rem;
    color: rgba(#161616, 0.5);
  }
}

.testATC {
  color: ghostwhite;
}
</style>
