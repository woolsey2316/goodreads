import { IconButton } from './button/IconButton.tsx'
import styled from 'styled-components'
import NotificationIcon from '../assets/icn_nav_notifications.svg?react';
import DiscussionsIcon from '../assets/icn_nav_discussions.svg?react';
import MessagesIcon from '../assets/icn_nav_msgs.svg?react';
import FriendIcon from '../assets/icn_nav_friend.svg?react';
import userImage from '/user.png';
const Nav = styled.nav`
  display:flex
`
// 2. Create the styled image component
const UserImage = styled.img`
  width: 300px;
  height: auto;
`;

export const NavButtonQuilt = () => {
  return <Nav>
    <IconButton Icon={<NotificationIcon />} />
    <IconButton Icon={<DiscussionsIcon />} />
    <IconButton Icon={<MessagesIcon />} />
    <IconButton Icon={<FriendIcon />} />
    <IconButton Icon={<UserImage src={userImage} alt="user" />} />
  </Nav>

}
