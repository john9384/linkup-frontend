import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from 'app/slices/auth/selectors'
import styled from 'styled-components/macro'
// import { Advert } from './components/Advert';
import { NavMenu } from './components/NavMenu'
import { UserAccount } from './components/UserAccount'
import { authActions } from '../../slices/auth'
import useFetchUser from "../../../hooks/useFetchUser";

export const LeftSideBar = () => {
  const { loading, user } = useFetchUser()

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
