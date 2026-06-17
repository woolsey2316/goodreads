import { IconButton } from './button/IconButton.tsx'
import styled from 'styled-components'
import notificationIcon from '../assets/icn_nav_notifications.svg?react';
import discussionsIcon from '../assets/icn_nav_discussions.svg?react';
import messagesIcon from '../assets/icn_nav_msgs.svg?react';
import friendIcon from '../assets/icn_nav_friend.svg?react';
import userImage from '/user.png';
const Nav = styled.nav`
  display:flex;
  margin-left: 10px;
`
const UserImage = styled.img`
  width: 33px;
  height: auto;
  border-radius: 50%;
  border: 1px solid #D8D8D8;
`;
const NotificationIcon = styled(notificationIcon)`
  width: 30px;
  height: 30px;
`
const DiscussionsIcon = styled(discussionsIcon)`
  width: 30px;
  height: 30px;
`
const MessagesIcon = styled(messagesIcon)`
  width: 30px;
  height: 30px;
`
const FriendIcon = styled(friendIcon)`
  width: 30px;
  height: 30px;
`
export const NavButtonQuilt = () => {
  return <Nav>
    <IconButton Icon={<NotificationIcon />} />
    <IconButton Icon={<DiscussionsIcon />} />
    <IconButton Icon={<MessagesIcon />} />
    <IconButton Icon={<FriendIcon />} />
    <IconButton Icon={<UserImage src={userImage} alt="user" />} />
  </Nav>

}
