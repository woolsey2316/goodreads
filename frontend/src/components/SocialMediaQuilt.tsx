import styled from 'styled-components'
import facebookIcon from '../assets/facebook.svg?react';
import twitterIcon from '../assets/twitter.svg?react';
import instagramIcon from '../assets/instagram.svg?react';
import linkedinIcon from '../assets/linkedin.svg?react';
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
const FacebookIcon = styled(facebookIcon)`
  width: 30px;
  height: 30px;
`
const TwitterIcon = styled(twitterIcon)`
  width: 30px;
  height: 30px;
`
const InstagramIcon = styled(instagramIcon)`
  width: 30px;
  height: 30px;
`
const LinkedInIcon = styled(linkedinIcon)`
  width: 30px;
  height: 30px;
`
export const SocialMediaQuilt = () => {
  return <OuterContainer>
    <FacebookIcon />
    <TwitterIcon />
    <InstagramIcon />
    <LinkedInIcon />
  </OuterContainer>
}