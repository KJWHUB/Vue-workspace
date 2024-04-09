<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div>
      <p>{{ 1 }}</p>
      <p>{{ $translate('greetings.hello') }}</p>
      <p>{{ $translate('greetings') }}</p>

      <button @click="$customModal().showModal()">click</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
