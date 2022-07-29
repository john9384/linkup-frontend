import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from 'app/slices/auth/selectors'
import styled from 'styled-components/macro'
// import { Advert } from './components/Advert';
import { NavMenu } from './components/NavMenu'
import { UserAccount } from './components/UserAccount'
import { authActions } from '../../slices/auth'

export const LeftSideBar = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(authActions.getCurrentUser())
  }, [dispatch])

  return (
    <Container>
      <UserAccount user={user} />
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
