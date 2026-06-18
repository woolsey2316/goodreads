import styled from 'styled-components'
import { IconButton } from './button/IconButton.tsx'
import { NavLink } from 'react-router-dom'
const OuterContainer = styled.div`
  position: relative;
`
const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: -200px;
  background: #FFFFFF;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    display: block;
  }
  
}
`
const DropdownLink = styled.div`
  color: #333333;
  display: flex;
  align-items: center;
  text-decoration: none;
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
const DropdownMenuItem = styled(NavLink)`
  color: #333333;
  display: block;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  width: 250px;
  line-height: 32px;
  padding: 0 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const BreakLine = styled.div`
  border-top: 1px solid #D8D8D8;
`
export const ProfileButton = ({ Icon }: { Icon: React.ReactNode }) => {
  return <OuterContainer>
    <DropdownLink>
      <IconButton Icon={Icon} />
    </DropdownLink>
    <DropdownMenu>
      <DropdownMenuItem to="/profile">Profile</DropdownMenuItem>
      <DropdownMenuItem to="/friends">Friends</DropdownMenuItem>
      <DropdownMenuItem to="/groups">Groups</DropdownMenuItem>
      <DropdownMenuItem to="/discussions">Discussions</DropdownMenuItem>
      <DropdownMenuItem to="/comments">Comments</DropdownMenuItem>
      <DropdownMenuItem to="/reading-challenge">Reading Challenge</DropdownMenuItem>
      <DropdownMenuItem to="/kindle-notes-and-highlights">Kindle Notes and Highlights</DropdownMenuItem>
      <DropdownMenuItem to="/quotes">Quotes</DropdownMenuItem>
      <DropdownMenuItem to="/favourite-genres">Favourite Genres</DropdownMenuItem>
      <DropdownMenuItem to="/friends">Friends</DropdownMenuItem>
      <DropdownMenuItem to="/recommendations">Recommendations</DropdownMenuItem>
      <BreakLine></BreakLine>
      <DropdownMenuItem to="/account-settings">Account Settings</DropdownMenuItem>
      <DropdownMenuItem to="/help">Help</DropdownMenuItem>
      <DropdownMenuItem to="/signout">Signout</DropdownMenuItem>
    </DropdownMenu>
  </OuterContainer>
}