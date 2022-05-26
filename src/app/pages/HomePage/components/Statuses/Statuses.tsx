import styled from 'styled-components';
import { Avatar } from './Avatar';
import { dummyUsers } from 'app/assets/dummyUsers';
import { StatusAddIcon } from './AddIcon';

export const Statuses = () => {
  const statuses = dummyUsers;
  return (
    <Container>
      <StatusCard>
        <StatusAddIcon />
        <StatusCardText>Add Story</StatusCardText>
      </StatusCard>
      {statuses.map(status => (
        <StatusCard>
          <StatusBg src={status.bgImg} />
          <StatusAvatar>
            <Avatar imgSrc={status.avatar} imgAlt="" />
          </StatusAvatar>
          <StatusCardText>{status.name}</StatusCardText>
        </StatusCard>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 1.5rem;
  overflow: scroll;
`;

const StatusCard = styled.div`
  height: 20rem;
  width: 12rem;
  min-width: 12rem;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(25.33deg, #a1afbb 4.15%, #dee6ea 100%);
`;
const StatusAvatar = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
const StatusBg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const StatusCardText = styled.p`
  width: 70%;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
`;
