import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
interface Shelves {
  name: string
  count: number
  shelf_id: number
}
const shelves: Shelves[] = [
  { name: 'Want to Read', count: 40, shelf_id: 1 },
  { name: 'Currently Reading', count: 10, shelf_id: 2 },
  { name: 'Read Books', count: 50, shelf_id: 3 },
  { name: 'Did Not Finish', count: 0, shelf_id: 4 },
]
const Section = styled.section`
  margin-bottom: 24px;
  border-bottom: 1px solid #D8D8D8;
  padding-bottom: 20px;
`
const Heading = styled.h3`
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  font-weight: bold;  
  line-height: 1.15;
  margin: 12px 0;
  text-transform: uppercase;
`
const Link = styled(NavLink)`
  display: block;
  color: #00635D;
  cursor: pointer;
  text-decoration: none;
  text-align: right;
`
const BookLink = styled(NavLink)`
  display: block;
  color: #00635D;
  cursor: pointer;
  text-decoration: none;
  text-align: left;
`
const BookCountContainer = styled.div`
  padding-right: 12px;
  text-align: right;
`
const BookNameContainer = styled.div`
  display: block;
  color: #00635D;
  cursor: pointer;
  text-decoration: none;
  text-align: left;
`
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`
export const BookShelves = () => {

  return <Section>
    <Heading>Book Shelves</Heading>
    <FlexContainer>
      <BookCountContainer>
        {shelves.map((shelf) => (
          <Link key={shelf.shelf_id} to={`/review/${shelf.shelf_id}`}>{shelf.count}</Link>
        ))}
      </BookCountContainer>
      <BookNameContainer>
        {shelves.map((shelf) => (
          <BookLink key={shelf.shelf_id} to={`/review/${shelf.shelf_id}`}>{shelf.name}</BookLink>
        ))}
      </BookNameContainer>
    </FlexContainer>
  </Section>
}