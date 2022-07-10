import React from 'react'
import styled from 'styled-components'
import { Avatar } from './components/Avatar'
import AvatarImg from 'app/assets/avatar-3637425__340.png'

export const UserAccount = React.memo(() => {
  return (
    <Container>
      <Avatar imgSrc={AvatarImg} />
      <UserDetailDiv>
        <Name>John Doe</Name>
        <Username>@johndoe</Username>
      </UserDetailDiv>
    </Container>
  )
})

const Container = styled.div`
  width: 100%;
  background-color: ${p => p.theme.backgroundVariant};
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 3rem;
  display: flex;
  gap: 1.5rem;
`

const UserDetailDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Name = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`

const Username = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.46);
`
