import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const modalVisible = ref(false)

  const showModal = () => {
    modalVisible.value = true
  }
  const hideModal = () => {
    modalVisible.value = false
  }

  return { modalVisible, showModal, hideModal }
})
