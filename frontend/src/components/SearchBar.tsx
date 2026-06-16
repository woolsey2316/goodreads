import styled from 'styled-components'
const Outer = styled.div`
  display: flex;
`
const Input = styled.input`
  padding: 4px 26px 4px 8px;
  width: 100%;
`
export const SearchBar = () => {
  return <Outer>
    <Input />
  </Outer>
}
