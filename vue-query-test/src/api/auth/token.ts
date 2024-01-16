import instance from '@/api/axios'

export type tokenResponse = {
  id: string
  accessToken: string
}

export const getNewToken = async (id: string): Promise<tokenResponse> => {
  const res = await instance.get(`/authRefresh?id=${id}`)
  return res.data
}
