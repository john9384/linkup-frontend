import React from 'react';
import styled from 'styled-components';
import { Avatar } from './Avatar';
import {
  ButtonPry,
  ButtonSec,
  ButtonText,
} from '../../../../../components/Button/index';
interface Props {
  name: string;
  username: string;
  avatar: string;
}

export const RequestDiv = React.memo(({ name, username, avatar }: Props) => {
  return (
    <Container>
      <Avatar imgSrc={avatar} />
      <UserDetailDiv>
        <Name>{name}</Name>
        <Username>@{username}</Username>
      </UserDetailDiv>
      <CTA>
        <ButtonPry>
          <ButtonText>Accept</ButtonText>
        </ButtonPry>
        <ButtonSec>
          <ButtonText>Decline</ButtonText>
        </ButtonSec>
      </CTA>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  background-color: ${p => p.theme.backgroundVariant};
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const UserDetailDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const Username = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.46);
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  button {
    flex-grow: 1;
  }
`;
