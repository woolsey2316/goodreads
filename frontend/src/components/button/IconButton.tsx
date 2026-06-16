import styled from 'styled-components'
const Button = styled.button`
  margin-right: 4px;
`
export const IconButton = ({ Icon }: { Icon: React.ReactNode }) => {
  return <Button>{Icon}</Button>
}
