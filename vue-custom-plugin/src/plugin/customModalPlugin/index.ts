import { type App } from 'vue'
import { useModalStore } from './stores/modal'
import ModalWrap from './components/wrap/ModalWrap.vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $customModal: () => { showModal: () => void; hideModal: () => void }
  }
}

const customModalPlugin = {
  install: (app: App<Element>, options?: any) => {
    console.log('customModalPlugin installed')

    const { showModal, hideModal } = useModalStore()

    app.config.globalProperties.$customModal = () => {
      return { showModal, hideModal }
    }

    app.component('CustomModal', ModalWrap)
  }
}

export default customModalPlugin
