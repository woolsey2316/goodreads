import styled from 'styled-components'
import bookImage1 from '../assets/book-image1.jpg'
import bookImage2 from '../assets/book-image2.jpg'
import bookImage3 from '../assets/book-image3.jpg'
import bookImage4 from '../assets/book-image4.jpg'
import bookImage5 from '../assets/book-image5.jpg'
import bookImage6 from '../assets/book-image6.jpg'
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
const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`
const Link = styled.a`
  display: block;
  color: #00635D;
  cursor: pointer;
  text-decoration: none;
  margin-top: 12px;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`
export const WantToRead = () => {
  return <Section>
    <Heading>Want to Read</Heading>
    <ImageList>
      <Image src={bookImage1} alt="Book 1" />
      <Image src={bookImage2} alt="Book 2" />
      <Image src={bookImage3} alt="Book 3" />
      <Image src={bookImage4} alt="Book 4" />
      <Image src={bookImage5} alt="Book 5" />
      <Image src={bookImage6} alt="Book 6" />
    </ImageList>
    <Link href="/review/list">View all books</Link>
  </Section>
}