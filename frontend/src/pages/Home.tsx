import { NavBar } from '../components/Navbar.tsx'
import styled from 'styled-components'

const OuterPage = styled.div`
  width: 100vw;
`
export const Home = () => {
  return <OuterPage>
    <NavBar />
  </OuterPage>
}
