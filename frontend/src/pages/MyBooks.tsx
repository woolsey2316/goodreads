import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from '../components/Navbar.tsx'
import { useShelves } from '../hooks/useShelves.ts'

const OuterPage = styled.div`
  width: 100vw;
`
const MainContent = styled.div`
  @media (min-width: 1220px) {
    width: 1220px;
  }
  margin: 0 auto;
  padding: 24px 16px;
`
const Heading = styled.h1`
  color: #333333;
  font-family: "Merriweather", "Georgia", serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 24px;
`
const CreateForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`
const NameInput = styled.input`
  flex: 1;
  max-width: 400px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #D8D8D8;
  border-radius: 3px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  &:focus {
    outline: none;
    border-color: #00635D;
  }
`
const CreateButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: #00635D;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  &:hover {
    background-color: #004D48;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
const ShelfList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const ShelfItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #D8D8D8;
`
const ShelfName = styled.span`
  color: #00635D;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 16px;
  font-weight: bold;
`
const BookCount = styled.span`
  color: #666666;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
`
const EmptyMessage = styled.p`
  color: #666666;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
`

export const MyBooks = () => {
  const { user_id } = useParams<{ user_id: string }>()
  const { shelves, isLoading, createShelf } = useShelves(user_id)
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed || submitting) return

    setSubmitting(true)
    try {
      await createShelf(trimmed)
      setName('')
    } finally {
      setSubmitting(false)
    }
  }

  if (isLoading || !user_id) {
    return null
  }

  return (
    <OuterPage>
      <NavBar user_id={user_id} />
      <MainContent>
        <Heading>My Books</Heading>
        <CreateForm onSubmit={handleSubmit}>
          <NameInput
            type="text"
            placeholder="New shelf name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CreateButton type="submit" disabled={!name.trim() || submitting}>
            Create Shelf
          </CreateButton>
        </CreateForm>
        {shelves.length === 0 ? (
          <EmptyMessage>No shelves yet. Create one above.</EmptyMessage>
        ) : (
          <ShelfList>
            {shelves.map((shelf) => (
              <ShelfItem key={shelf.shelf_id}>
                <ShelfName>{shelf.name}</ShelfName>
                <BookCount>
                  {shelf.book_ids.length} {shelf.book_ids.length === 1 ? 'book' : 'books'}
                </BookCount>
              </ShelfItem>
            ))}
          </ShelfList>
        )}
      </MainContent>
    </OuterPage>
  )
}
