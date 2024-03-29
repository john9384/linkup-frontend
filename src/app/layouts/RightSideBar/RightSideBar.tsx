import styled from 'styled-components/macro'
import { Contacts } from './components/Contacts'
import { FriendRequest } from './components/FriendRequests'

export const RightSideBar = () => {
  return (
    <Container>
      <FriendRequest />
      <Contacts />
    </Container>
  )
}

const Container = styled.div`
  flex: 1.8;
  height: 100%;
  position: fixed;
  top: 60px;
  right: 5rem;
  width: 20vw;
`
