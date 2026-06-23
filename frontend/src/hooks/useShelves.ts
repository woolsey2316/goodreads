import useSWR, { mutate } from 'swr'
import { authFetch } from '../lib/auth.ts'

export interface Shelf {
  shelf_id: number
  name: string
  book_ids: number[]
}

const fetcher = (url: string) =>
  authFetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch shelves')
    return res.json() as Promise<Shelf[]>
  })

export const useShelves = (userId: string | undefined) => {
  const shelvesKey = userId ? `/api/users/${userId}/shelves/` : null
  const { data, error, isLoading } = useSWR<Shelf[]>(shelvesKey, fetcher)

  const createShelf = async (name: string) => {
    if (!userId) return
    const res = await authFetch(`/api/users/${userId}/shelves/`, {
      method: 'POST',
      body: JSON.stringify({ name }),
    })
    if (!res.ok) throw new Error('Failed to create shelf')
    await mutate(shelvesKey)
  }

  return { shelves: data ?? [], error, isLoading, createShelf }
}
