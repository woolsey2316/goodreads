import useSWR from 'swr'
import { authFetch } from '../lib/auth.ts'

export interface Book {
  book_id: number
  title: string
  authors: string
  image_url: string
  average_rating: number
}

const fetcher = (url: string) =>
  authFetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to search books')
    return res.json() as Promise<Book[]>
  })

export const useBookSearch = (query: string | null) => {
  const searchKey = query ? `/api/books/search/?q=${encodeURIComponent(query)}` : null
  const { data, error, isLoading } = useSWR<Book[]>(searchKey, fetcher)
  return { books: data ?? [], error, isLoading }
}
