import { AuthToken } from '@/utils/AuthToken'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const accessToken = new AuthToken()
  return { accessToken }
})
