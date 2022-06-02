import styled from 'styled-components';
import { RequestDiv } from './RequestDiv';
import { dummyUsers } from '../../../../assets/dummyUsers';

export const FriendRequest = () => {
  const friendRequests = [dummyUsers[0], dummyUsers[1]];
  return (
    <>
      <Head>
        <Title>FRIEND REQUESTS</Title>
        <Badge>5</Badge>
      </Head>
      {friendRequests.map(friendRequest => (
        <RequestDiv
          key={friendRequest.name}
          name={friendRequest.name}
          username={friendRequest.username}
          avatar={friendRequest.avatar}
        />
      ))}
    </>
  );
};

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 1rem;
`;
const Title = styled.span``;

const Badge = styled.span`
  display: block;
  background-color: red;
  justify-self: flex-end;
  padding: 2px 5px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.5px;
`;
