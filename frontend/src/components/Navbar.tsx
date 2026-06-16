import { useState } from 'react';
import { GoodReadsIcon } from './icons/goodreads.tsx'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SearchBar } from './SearchBar.tsx'
import { NavButtonQuilt } from './NavButtonQuilt.tsx'
const OuterContainer = styled.div`
  display: flex;
`
const InnerContainer = styled.div`
  @media (min-width: 1220px) {
    width: 1220px;
  }
  height: 50px;
  margin: 0 auto;
  display: flex;
`
const Link = styled(NavLink)`
  color: #382110;
  text-decoration: none;
  padding: 0 15px;
  &:hover {
    color: #f2f2f2;
    background-color: #32362d;
  }
`
const UL = styled.ul`
  display: flex; 
  list-style: none;
`
const LI = styled.li`

`
const Nav = styled.nav`

`
export const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <OuterContainer>
      <InnerContainer>
        <GoodReadsIcon />
        <Nav>
          <UL>
            <LI>
              <Link to="/home">
                Home
              </Link>
            </LI>
            <LI>
              <Link to="/my-books">
                My Books
              </Link>
            </LI>
            <LI>
              <Link to="/my-community">
                My Community
              </Link>
            </LI>
            <LI>
              <Link to="/browse">
                Browse
              </Link>
            </LI>
          </UL>
        </Nav>
        <SearchBar />
        <NavButtonQuilt />
      </InnerContainer>
    </OuterContainer>

  );
}
