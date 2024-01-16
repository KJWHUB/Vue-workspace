import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { getNewToken } from '@/api/auth/token'
import { getRefreshToken, removeRefreshToken } from '@/utils/cookie'

export const useTokenStore = defineStore('token', () => {
  const router = useRouter()
  const accessToken = ref<string>()
  const isAuthenticated = async (): Promise<boolean> => {
    const at = accessToken.value
    const rt = getRefreshToken()

    if (!at && !rt) {
      return false
    }
    if (at && rt) {
      return true
    }
    if (rt && !at) {
      try {
        const res = await getNewToken(rt)
        accessToken.value = res.accessToken
        return true
      } catch (e) {
        return false
      }
    }

    return false
  }

  const logout = () => {
    removeRefreshToken()
    removeAccessToken()
    router.push({ name: 'login' })
  }

  const setAccessToken = (token: string) => {
    accessToken.value = token
  }
  const removeAccessToken = () => {
    accessToken.value = undefined
  }

  return { accessToken, isAuthenticated, logout, setAccessToken }
})
