import { useState, type FormEvent } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components/Navbar.tsx'
import { useAuth } from '../context/AuthContext.tsx'
import { useBookSearch } from '../hooks/useBookSearch.ts'
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
const SectionHeading = styled.h2`
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 12px;
`
const CreateForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`
const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
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
const SearchInput = styled(NameInput)`
  max-width: 500px;
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
const SearchSection = styled.section`
  margin-bottom: 40px;
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
const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const SearchResultItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #D8D8D8;
`
const BookImage = styled.img`
  width: 40px;
  height: 60px;
  object-fit: cover;
  border-radius: 2px;
  background-color: #f4f1ea;
`
const BookInfo = styled.div`
  flex: 1;
  min-width: 0;
`
const BookTitle = styled.div`
  color: #333333;
  font-family: "Merriweather", "Georgia", serif;
  font-size: 14px;
  font-weight: bold;
`
const BookAuthor = styled.div`
  color: #666666;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 12px;
  margin-top: 4px;
`
const AddToShelfControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const ShelfSelect = styled.select`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #D8D8D8;
  border-radius: 3px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #00635D;
  }
`
const StatusMessage = styled.p`
  color: #00635D;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  margin: 8px 0 0;
`

export const MyBooks = () => {
  const { userId } = useAuth()
  const { shelves, isLoading, createShelf, addBookToShelf } = useShelves(userId ?? undefined)
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null)
  const [addingBookId, setAddingBookId] = useState<number | null>(null)
  const [selectedShelves, setSelectedShelves] = useState<Record<number, string>>({})
  const [addedMessage, setAddedMessage] = useState('')

  const { books, isLoading: isSearching } = useBookSearch(submittedQuery)

  const handleCreateShelf = async (e: FormEvent) => {
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

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = searchQuery.trim()
    setSubmittedQuery(trimmed || null)
    setAddedMessage('')
  }

  const handleAddBook = async (bookId: number, bookTitle: string) => {
    const shelfId = selectedShelves[bookId]
    if (!shelfId || addingBookId !== null) return

    setAddingBookId(bookId)
    setAddedMessage('')
    try {
      await addBookToShelf(Number(shelfId), bookId)
      const shelf = shelves.find((s) => s.shelf_id === Number(shelfId))
      setAddedMessage(`Added "${bookTitle}" to ${shelf?.name ?? 'shelf'}`)
    } finally {
      setAddingBookId(null)
    }
  }

  if (isLoading || !userId) {
    return null
  }

  return (
    <OuterPage>
      <NavBar user_id={userId} />
      <MainContent>
        <Heading>My Books</Heading>

        <SearchSection>
          <SectionHeading>Search Books</SectionHeading>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Search by title or author"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CreateButton type="submit" disabled={!searchQuery.trim()}>
              Search
            </CreateButton>
          </SearchForm>
          {isSearching && <EmptyMessage>Searching...</EmptyMessage>}
          {submittedQuery && !isSearching && books.length === 0 && (
            <EmptyMessage>No books found for &quot;{submittedQuery}&quot;</EmptyMessage>
          )}
          {books.length > 0 && (
            <SearchResults>
              {books.map((book) => (
                <SearchResultItem key={book.book_id}>
                  <BookImage
                    src={book.image_url || undefined}
                    alt={book.title}
                  />
                  <BookInfo>
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.authors}</BookAuthor>
                  </BookInfo>
                  <AddToShelfControls>
                    {shelves.length > 0 ? (
                      <>
                        <ShelfSelect
                          value={selectedShelves[book.book_id] ?? ''}
                          onChange={(e) =>
                            setSelectedShelves((prev) => ({
                              ...prev,
                              [book.book_id]: e.target.value,
                            }))
                          }
                        >
                          <option value="">Select shelf</option>
                          {shelves.map((shelf) => (
                            <option key={shelf.shelf_id} value={shelf.shelf_id}>
                              {shelf.name}
                            </option>
                          ))}
                        </ShelfSelect>
                        <CreateButton
                          type="button"
                          disabled={!selectedShelves[book.book_id] || addingBookId === book.book_id}
                          onClick={() => handleAddBook(book.book_id, book.title)}
                        >
                          Add
                        </CreateButton>
                      </>
                    ) : (
                      <EmptyMessage>Create a shelf first</EmptyMessage>
                    )}
                  </AddToShelfControls>
                </SearchResultItem>
              ))}
            </SearchResults>
          )}
          {addedMessage && <StatusMessage>{addedMessage}</StatusMessage>}
        </SearchSection>

        <SectionHeading>Your Shelves</SectionHeading>
        <CreateForm onSubmit={handleCreateShelf}>
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
