import { NavBar } from '../components/Navbar.tsx'
import styled from 'styled-components'
import { CurrentlyReading } from '../components/CurrentlyReading.tsx'
import { ReadingChallenge } from '../components/ReadingChallenge.tsx'
import { WantToRead } from '../components/WantToRead.tsx'
import { BookShelves } from '../components/BookShelves.tsx'
const OuterPage = styled.div`
  width: 100vw;
`
const MainContent = styled.div`
  @media (min-width: 1220px) {
    width: 1220px;
  }
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const SecondaryColumn = styled.div`
  width: 300px;
`
const PrimaryColumn = styled.div`
  width: 600px;
`
const TertiaryColumn = styled.div`
  width: 200px;
`
export const Home = () => {
  return <OuterPage>
    <NavBar />
    <MainContent>
      <SecondaryColumn>
        <CurrentlyReading />
        <ReadingChallenge />
        <WantToRead />
        <BookShelves />
      </SecondaryColumn>
      <PrimaryColumn></PrimaryColumn>
      <TertiaryColumn></TertiaryColumn>
    </MainContent>
  </OuterPage>
}
