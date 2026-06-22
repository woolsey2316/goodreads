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
  margin-right: 16px;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  min-width: 0;
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
  margin: 3px 0;
  text-align: start;
`
const ProgressBarTrack = styled.div`
  width: 100%;
  height: 8px;
  background-color: #E8E8E8;
  border-radius: 4px;
  margin-top: 12px;
  overflow: hidden;
`
const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background-color: #00635D;
  border-radius: 4px;
  transition: width 0.3s ease;
`
const ProgressBarLabel = styled.span`
  color: #333333;
    font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 14px;
    line-height: 18px;
  margin-top: 4px;
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
  let progress_percent = Math.min(100, Math.round((books_read / goal_books_read) * 100));
  return <Section>
    <Heading>Reading Challenge</Heading>
    <Wrapper>
      <ReadingChallengeImage />
      <Box>
        <ReadingChallengeStatus>{books_read}</ReadingChallengeStatus>
        <ReadingChallengeTitle>Books completed</ReadingChallengeTitle>
        <ProgressBarTrack>
          <ProgressBarFill $percent={progress_percent} />
        </ProgressBarTrack>
        <ProgressBarLabel>{progress_percent}% of {goal_books_read} book goal</ProgressBarLabel>
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