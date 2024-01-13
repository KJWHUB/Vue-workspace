import instance from '@/api/axios'

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
  // const res = await instance.get(`/user?userInfo.id=${id}`)
  const res = await instance.get(`/user/${id}`)
  return res.data
}
