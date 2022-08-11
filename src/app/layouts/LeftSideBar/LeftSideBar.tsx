import React from 'react'
import styled from 'styled-components/macro'
// import { Advert } from './components/Advert';
import { NavMenu } from './components/NavMenu'
import { UserAccount } from './components/UserAccount'
import useFetchCurrentUserProfile from '../../../hooks/useFetchCurrentUserProfile'

export const LeftSideBar = () => {
  const { loading, user } = useFetchCurrentUserProfile()

  return (
    <Container>
      <UserAccount user={user} loading={loading} />
      <NavMenu />
      {/* <Advert /> */}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 80px;
  width: 20vw;
  flex: 1.8;
  height: 100%;
`
