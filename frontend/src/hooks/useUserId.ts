import useSWR from 'swr'

interface UserResponse {
  user_id: string
}

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch user')
    return res.json() as Promise<UserResponse>
  })

export const useUserId = () => {
  const { data, error, isLoading } = useSWR<UserResponse>('/api/user/', fetcher)
  return { userId: data?.user_id, error, isLoading }
}
