import styled from "styled-components"
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  color: #382110;
  display: flex;
  align-items: center;
  line-height: 50px;
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  &:hover {
    color: #f2f2f2;
    background-color: #32362d;
  }
`
const UL = styled.ul`
  display: flex; 
  justify-content: center;
  list-style: none;
`
const LI = styled.li`

`
const Nav = styled.nav`
  margin: 0 15px;
  min-width: 400px;
`
const Span = styled.span`
  font-size: 14px;
  line-height: 10px;
  padding-bottom: 4px;
`
export const NavList = () => {
return <Nav>
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
        <Link to="/browse">
        Browse <Span>▼</Span>
        </Link>
    </LI>
    <LI>
        <Link to="/my-community">
        Community <Span>▼</Span>
        </Link>
    </LI>
    </UL>
</Nav>
}
