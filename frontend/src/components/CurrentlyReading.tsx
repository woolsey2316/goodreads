import styled from 'styled-components'
interface ReadingList {
  title: string;
  author: string;
  image: string;
}
const Heading = styled.h3`
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.15;
  margin: 12px 0;
  text-transform: uppercase;
`
const ReadingListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const CurrentlyReadingItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`
const CurrentlyReadingItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`
const CurrentlyReadingItemTitle = styled.a`
  color: #333333;
  font-family: "Merriweather", "Georgia", serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.15;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const CurrentlyReadingItemAuthor = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const UpdateProgressButton = styled.button`
  width: 111px;
  margin-top: 4px;
  font-size: 11px;
  padding: 4px 12px;
  background-color: transparent;
  border: 1px solid #382110;
  color: #382110;
  font-weight: normal;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  &:hover {
    background-color: #382110;
    color: white;
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
`
const FooterLink = styled.a`
  appearance: none;
  border: none;
  padding: 0;
  background-color: transparent;
  color: #00635D;
  text-decoration: none;
  cursor: pointer;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`
const Dot = styled.span`
  color: #000;
  font-size: 14px;
`
const CurrentlyReadingList = ({ readingList }: { readingList: ReadingList[] }) => {
  return <ReadingListContainer>
    {readingList.slice(0, 3).map((Element: ReadingList) => 
    <CurrentlyReadingItem key={Element.title}>
      <CurrentlyReadingItemImage src={Element.image} alt="Currently Reading" />
      <Wrapper> 
        <CurrentlyReadingItemTitle>{Element.title}</CurrentlyReadingItemTitle>
        <CurrentlyReadingItemAuthor>by {Element.author}</CurrentlyReadingItemAuthor>
        <UpdateProgressButton>Update Progress</UpdateProgressButton>
      </Wrapper>
    </CurrentlyReadingItem>
    )}
    <Footer>
      <FooterLink>See More</FooterLink>
      <Dot>&nbsp;·&nbsp;</Dot>
      <FooterLink>Add a Book</FooterLink>
      <Dot>&nbsp;·&nbsp;</Dot>
      <FooterLink>General Update</FooterLink>
    </Footer>
  </ReadingListContainer>
}

const Section = styled.section`
  margin-bottom: 24px;
  border-bottom: 1px solid #D8D8D8;
  padding-bottom: 24px;
`
export const CurrentlyReading = () => {
  const readingList = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://via.placeholder.com/40"
    },
    {
      title: "The City of God",
      author: "St. Augustine",
      image: "https://via.placeholder.com/40"
    },
    {
      title: "Computer Systems: A Programmer's Perspective",
      author: "Randal E. Bryant",
      image: "https://via.placeholder.com/40"
    },
  ]
  return <Section>
    <Heading>Currently Reading</Heading>
    <CurrentlyReadingList readingList={readingList} />
  </Section>
}