import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Button = styled(NavLink)`
  border: none;
  background: none;
  padding: 7px 8px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: #FFFFFF;
    background-color: #333333;
  }
`

export const IconButton = ({ Icon, to }: { Icon: React.ReactNode, to?: string }) => {
  return <Button to={to}>{Icon}</Button>
}
