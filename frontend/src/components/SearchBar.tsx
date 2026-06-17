import styled from 'styled-components'
import searchIcon from '../assets/icn_nav_search.svg?react';
const Outer = styled.div`
  margin-top: 10px;
  width: 100%;
`
const Input = styled.input`
  padding: 4px 26px 4px 8px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 3px;
  border: #DCD6CC 1px solid;
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  resize: none;
  height: 32px;
  &:focus {
    box-shadow: 0 0 4px rgba(185, 173, 153, 0.5);
    border-color: #B9AD99;
    outline: 0px;
  }
`
const SearchIcon = styled(searchIcon)`
  width: 18px;
  height: 19px;
  filter: brightness(0);
`
const SearchIconContainer = styled.button`
  display: inline-block;
  height: 19px;
  position: absolute;
  right: 4px;
  top: 6.5px;
  width: 18px;
  border: none;
  background: none;
`
const Form = styled.form`
  position: relative;
`
export const SearchBar = () => {
  return <Outer>
    <Form>  
      <Input placeholder="Search books" />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </Form>
  </Outer>
}
