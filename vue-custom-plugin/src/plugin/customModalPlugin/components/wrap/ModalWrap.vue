<script setup lang="ts">
import { computed } from 'vue'
import ModalCard from '../card/ModalCard.vue'
import { useModalStore } from '../../stores/modal'

const modalStore = useModalStore()
const { hideModal } = modalStore
const modalVisible = computed(() => modalStore.modalVisible)
</script>

<template>
  <Teleport to="body">
    <div class="modal-wrap dim" :visible="modalVisible" @click="hideModal">
      <ModalCard>
        <div>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
          <button @click="hideModal">Close</button>
        </div>
      </ModalCard>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  visibility: hidden;
}

[visible='true'].dim {
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible;
}
</style>
