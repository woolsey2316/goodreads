import styled from 'styled-components'
const Section = styled.section`
  margin-bottom: 24px;
  border-bottom: 1px solid #D8D8D8;
  padding-bottom: 24px;
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ReadingChallengeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const ReadingChallengeStatus = styled.div`
  font-size: 28px;
  line-height: 1;
  font-weight: bold;
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  margin: 12px 0 0;
  text-align: start;
`
const ReadingChallengeTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  line-height: 1.15;
  margin: 12px 0 0;
  text-transform: uppercase;
  text-align: start;
`
const ReadingChallengeDescription = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0;
  text-align: start;
`
const ReadingChallengeButton = styled.a`
  color: #00635D;
  cursor: pointer;
  text-decoration: none;
`
export const ReadingChallenge = () => {
  let books_read = 10;
  let goal_books_read = 20
  let expected_books_read = Math.floor(new Date().getMonth() / 12 * goal_books_read);
  return <Section>
    <Heading>Reading Challenge</Heading>
    <Wrapper>
      <ReadingChallengeImage />
      <Box>
        <ReadingChallengeStatus>{books_read}</ReadingChallengeStatus>
        <ReadingChallengeTitle>Books completed</ReadingChallengeTitle>
        <ReadingChallengeDescription>{behind_or_ahead_of_schedule(expected_books_read, books_read)}</ReadingChallengeDescription>  
        <ReadingChallengeButton>View Challenge</ReadingChallengeButton>
      </Box>
    </Wrapper>
  </Section>
}

const behind_or_ahead_of_schedule = (expected_books_read: number, books_read: number) => {
  if (expected_books_read > books_read) {
    return `Behind schedule by ${expected_books_read - books_read} books`;
  } else if (expected_books_read < books_read) {
    return `Ahead of schedule by ${books_read - expected_books_read} books`;
  } else {
    return `On schedule`;
  }
}