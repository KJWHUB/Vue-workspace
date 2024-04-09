<script setup lang="ts"></script>

<template>
  <div class="modal-card">
    <slot />
  </div>
</template>

<style scoped>
.modal-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
