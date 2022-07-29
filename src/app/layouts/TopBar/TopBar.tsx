import styled from 'styled-components'
import { StyleConstants as SC } from 'styles/StyleConstants'
import { TopBarRight } from './components/TopBarRight'

export const TopBar = () => {
  return (
    <Container>
      <TopBarLeft>LinkUp</TopBarLeft>
      <TopBarRight />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: ${SC.LAYOUT.NAV_BAR_HEIGHT};
  margin: 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
  padding: 0 5rem;
  z-index: 1000;
`

const TopBarLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1778f2;
`
