import { getLogin, QUERY_KEY } from '@/api/auth/login'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

const useLogin = () => {
  // Access QueryClient instance
  // const queryClient = useQueryClient()

  // Mutation
  const loginMutation = useMutation({
    mutationFn: getLogin,
    onSuccess: (data) => {
      console.log('로그인에 성공했습니다.')
      console.log('get data :', data)
    },
    onError: (error) => {
      console.log('로그인에 실패했습니다.')
      console.log('get error :', error)
    }
  })

  return { loginMutation }
}

export default useLogin
