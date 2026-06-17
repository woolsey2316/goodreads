import styled from 'styled-components'
const Button = styled.button`
  border: none;
  background: none;
  padding: 7px 8px;
  cursor: pointer;
  &:hover {
    color: #FFFFFF;
    background-color: #382110;
  }
`
export const IconButton = ({ Icon }: { Icon: React.ReactNode }) => {
  return <Button>{Icon}</Button>
}
