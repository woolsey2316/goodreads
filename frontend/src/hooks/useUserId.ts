import useSWR from 'swr'
import { authFetch } from '../lib/auth.ts'

interface UserResponse {
  user_id: string
  username: string
}

const fetcher = (url: string) =>
  authFetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch user')
    return res.json() as Promise<UserResponse>
  })

export const useUserId = () => {
  const { data, error, isLoading } = useSWR<UserResponse>('/api/user/', fetcher)
  return { userId: data?.user_id, username: data?.username, error, isLoading }
}
