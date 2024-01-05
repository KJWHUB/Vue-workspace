import instance from './axios'

export type Post = {
  id: number
  title: string
  content: string
}
export type CreatePostRequest = {
  title: string
  content: string
}
export type deletePostRequest = number

export const QUERY_KEY = '/posts'

export const getPosts = async (): Promise<Post[]> => {
  const res = await instance.get('/posts')
  return res.data
}

export const createPost = async (data: CreatePostRequest) => {
  const res = await instance.post('/posts', data)
  return res.data
}

export const deletePost = async (id: deletePostRequest) => {
  const res = await instance.delete(`/posts/${id}`)
  return res.data
}
