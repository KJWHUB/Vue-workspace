import instance from '@/api/axios'

export const QUERY_KEY = '/test'

export type Test = {
  id: number
  title: string
  content: string
  permit: boolean
}
export type TestListResponse = Test[]

export const getTest = async (): Promise<TestListResponse> => {
  const res = await instance.get('/test')
  return res.data
}

/**
 * pnpm 버전과 tanstack v5 버전, 및 타입스크립트 버전 문제로 아직 해결되지않음
 */
// export const useTestQuery = () => {
//   return useQuery({
//     queryKey: [QUERY_KEY],
//     queryFn: getTest
//   })
// }
