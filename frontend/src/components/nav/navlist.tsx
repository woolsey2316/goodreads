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
const DropdownMenuItem = styled(NavLink)`
  color: #333333;
  display: block;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  line-height: 32px;
  padding: 0 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  background: #FFFFFF;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    display: block;
  }
  
}
`
const DropdownLink = styled.div`
  color: #382110;
  display: flex;
  align-items: center;
  line-height: 50px;
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #f2f2f2;
    background-color: #32362d;
  }
  &:hover + ${DropdownMenu} {
    display: block;
  }
  &:has(+ ${DropdownMenu}:hover) {
    background-color: #32362d;
    color: #f2f2f2;
  }
`
const UL = styled.ul`
  display: flex; 
  justify-content: center;
  list-style: none;
`
const LI = styled.li`
  position: relative;
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

export const NavList = ({ user_id }: { user_id: string }) => {
return <Nav>
  <UL>
  <LI>
      <Link to="/home">
      Home
      </Link>
  </LI>
  <LI>
      <Link to={`/review/list/${user_id}`}>
      My Books
      </Link>
  </LI>
  <LI>
      <DropdownLink>
        Browse <Span>▼</Span>
      </DropdownLink>
      <DropdownMenu>
        <DropdownMenuItem to="/recommendations">Recommendations</DropdownMenuItem>
        <DropdownMenuItem to="/choice-awards">Choice Awards</DropdownMenuItem>
        <DropdownMenuItem to="/giveaways">Giveaways</DropdownMenuItem>
        <DropdownMenuItem to="/new-releases">New Releases</DropdownMenuItem>
        <DropdownMenuItem to="/lists">Lists</DropdownMenuItem>
        <DropdownMenuItem to="/explore">Explore</DropdownMenuItem>
        <DropdownMenuItem to="/news-reviews">News & Reviews</DropdownMenuItem>
      </DropdownMenu>
  </LI>
  <LI>
    <DropdownLink>
      Community <Span>▼</Span>
      </DropdownLink>
      <DropdownMenu>
        <DropdownMenuItem to="/groups">Groups</DropdownMenuItem>
        <DropdownMenuItem to="/discussions">Discussions</DropdownMenuItem>
        <DropdownMenuItem to="/quotes">Quotes</DropdownMenuItem>
        <DropdownMenuItem to="/ask-the-author">Ask the author</DropdownMenuItem>
        <DropdownMenuItem to="/people">People</DropdownMenuItem>
      </DropdownMenu>
    </LI>
  </UL>
</Nav>
}
