import { useState } from 'react';
import { GoodReadsIcon } from './icons/goodreads.tsx'
import { NavList } from './nav/navlist.tsx'
import styled from 'styled-components'
import { SearchBar } from './SearchBar.tsx'
import { NavButtonQuilt } from './NavButtonQuilt.tsx'
const OuterContainer = styled.div`
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`
const InnerContainer = styled.div`
  @media (min-width: 1220px) {
    width: 1220px;
  }
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const IsDesktop = styled.div`
  display: none;
  @media (min-width: 1220px) {
    display: block;
  }
`
const IsMobile = styled.div`
  display: block;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  @media (min-width: 1220px) {
    display: none;
  }
`
const IconWrapperLink = styled.a`
  margin: 0 16px 0 15px;
  height: 50px;
`
export const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <OuterContainer>
        <InnerContainer>
          <IconWrapperLink href="/">
            <GoodReadsIcon />
          </IconWrapperLink>
          <IsDesktop>
            <NavList />
          </IsDesktop>
          <SearchBar />
          <NavButtonQuilt />
        </InnerContainer>
      </OuterContainer>
      <IsMobile>
        <NavList />
      </IsMobile>
    </>

  );
}
