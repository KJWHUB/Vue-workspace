import instance from '@/api/axios'

export const QUERY_KEY = '/login'

export type LoginRequest = {
  id: string
}
export type LoginResponse = {
  accessToken: string
  refreshToken: string
  userInfo: {
    id: number
    name: string
    role: string
  }
}

export const getLogin = async (id: string): Promise<LoginResponse> => {
  console.log('파라미터 확인:', id)
  const res = await instance.get('/login')
  return res.data
}
