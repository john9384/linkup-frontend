import styled from 'styled-components/macro'
import { dummyUsers } from 'app/assets/dummyUsers'

export const PeopleList = () => {
  return (
    <Container>
      {dummyUsers.map(user => (
        <UserCard>
          <UserCardImg src={user.avatar}></UserCardImg>
          <UserName>{user.name}</UserName>
          <UserActive>
            <ActiveIcon />
            <ActiveText>Active</ActiveText>
          </UserActive>
        </UserCard>
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  justify-content: space-between;
`

const UserCard = styled.div`
  width: 100%;
  min-width: 12rem;
  height: 18rem;
  background: green;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(25.33deg, #a1afbb 4.15%, #dee6ea 100%);
  position: relative;
  transition: all 0.5s;
  &:hover > img {
    transform: scale(1.2);
  }
`
const UserCardImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
`
const UserName = styled.div`
  width: 70%;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
`
const UserActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 70%;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
`
const ActiveIcon = styled.span`
  display: block;
  background-color: green;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
const ActiveText = styled.span`
  color: white;
`
