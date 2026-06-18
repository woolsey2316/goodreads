import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const OuterContainer = styled.div`
  position: relative;
`
const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  width: 330px;
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
  text-decoration: none;
  height: 50px;
  padding: 7px 8px;
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
const DropdownMenuItem = styled.div`
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
const NotificationsBar = styled.div`
  border-bottom: 1px solid #D8D8D8;
  padding: 8px 16px;
  font-size: 12px;
`
const NotificationHeader = styled.h3`
  margin: 4px 0 2px;
  color: #382110;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  text-transform: uppercase;
`
const NotificationsLink = styled(NavLink)`
  color: #00635D;
  text-decoration: none;
`
const NotificationsList = styled.div`
  border-bottom: 1px solid #D8D8D8;
  list-style-type: none;
  padding: 8px 15px;
`
export const DropdownButton = ({ Icon, notifications }: { Icon: React.ReactNode, notifications: any[] }) => {
  return <OuterContainer>
    <DropdownLink>{Icon}</DropdownLink>
    <DropdownMenu>
      <NotificationsBar>
        <NotificationHeader>Notifications</NotificationHeader>
        <NotificationsLink to="/notifications">View all notifications</NotificationsLink>
      </NotificationsBar>
      <NotificationsList>
        {notifications.length == 0 && (
          <span>You have no new notifications</span>
        )}
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id}>{notification.title}</DropdownMenuItem>
        ))}
      </NotificationsList>
    </DropdownMenu>
  </OuterContainer>
}