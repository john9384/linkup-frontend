import styled from 'styled-components/macro';
// import { Advert } from './components/Advert';
import { NavMenu } from './components/NavMenu';
import { UserAccount } from './components/UserAccount';

export const LeftSideBar = () => {
  return (
    <Container>
      <UserAccount />
      <NavMenu />
      {/* <Advert /> */}
    </Container>
  );
};

const Container = styled.div`
  flex: 1.8;
  height: 100%;
`;
