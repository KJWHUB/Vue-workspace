<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <VueQueryDevtools position="right" buttonPosition="bottom-right" />
</template>

<style scoped>
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
</style>
