import type { App } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}

const customPlugin = {
  install(app: App<Element>, options: any) {
    console.log('customPlugin installed')

    const version = Number(app.version.split('.')[0])
    if (version < 3) {
      console.warn('이 플러그인은 Vue 3가 필요합니다.')
    }

    // 전역적으로 사용 가능한 $translate() 메서드 주입
    app.config.globalProperties.$translate = (key: string) => {
      // `key`를 경로로 사용하여
      // `options`에서 중첩 속성을 검색합니다.
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}

export default customPlugin
