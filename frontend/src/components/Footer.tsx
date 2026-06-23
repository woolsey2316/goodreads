import styled from 'styled-components'
import { SocialMediaQuilt } from './SocialMediaQuilt.tsx'
const OuterContainer = styled.footer`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
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
const Link = styled.a`
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  line-height: 1.15;
  margin: 6px 0;
  display: block;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Footer = () => { 
  return <OuterContainer>
    <Wrap>
      <Heading>Company</Heading>
      <Link>About us</Link>
      <Link>Careers</Link>
      <Link>Terms</Link>
      <Link>Privacy</Link>
      <Link>Interest Based Ads</Link>
      <Link>Ad Preferences</Link>
      <Link>Your Ads Privacy Choices</Link>
      <Link>Help</Link>
    </Wrap>
    <Wrap>
      <Heading>Work With Us</Heading>
      <Link>Authors</Link>
      <Link>Advertise</Link>
      <Link>Authors & ads blog</Link>
    </Wrap>
    <Box>
      <Heading>Connect</Heading>
      <SocialMediaQuilt></SocialMediaQuilt>
    </Box>
  </OuterContainer>
}