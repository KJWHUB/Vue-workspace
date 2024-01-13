import { removeRefreshToken } from '@/utils/cookie'
import { useRouter } from 'vue-router'

export const useLogout = () => {
  const router = useRouter()

  const logout = () => {
    // refreshToken 삭제
    removeRefreshToken()

    // 이동후 새로고침
    router.push({ name: 'login' })
    router.go(0)
  }

  return {
    logout
  }
}
