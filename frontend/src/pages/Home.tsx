import { NavBar } from '../components/Navbar.tsx'
import styled from 'styled-components'
import { CurrentlyReading } from '../components/CurrentlyReading.tsx'
import { ReadingChallenge } from '../components/ReadingChallenge.tsx'
import { WantToRead } from '../components/WantToRead.tsx'
import { BookShelves } from '../components/BookShelves.tsx'
import { Updates } from '../components/Updates.tsx'
import { NewsAndInterviews } from '../components/NewsAndInterviews.tsx'
import { Recommendations } from '../components/Recommendations.tsx'
import { Footer } from '../components/Footer.tsx'
import { useUserId } from '../hooks/useUserId.ts'
const OuterPage = styled.div`

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
  width: 400px;
`
const PrimaryColumn = styled.div`
  width: 600px;
`
const TertiaryColumn = styled.div`
  width: 300px;
`
export const Home = () => {
  const { userId, isLoading } = useUserId()

  if (isLoading) {
    return null
  }

  return <OuterPage>
    <NavBar user_id={userId} />
    <MainContent>
      <SecondaryColumn>
        <CurrentlyReading />
        <ReadingChallenge />
        <WantToRead />
        <BookShelves />
      </SecondaryColumn>
      <PrimaryColumn>
        <Updates/>
      </PrimaryColumn>
      <TertiaryColumn>
        <NewsAndInterviews />
        <Recommendations />
        <Footer />
      </TertiaryColumn>
    </MainContent>
  </OuterPage>
}
