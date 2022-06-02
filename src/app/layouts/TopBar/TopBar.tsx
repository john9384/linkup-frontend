import styled from 'styled-components';
import { StyleConstants as SC } from 'styles/StyleConstants';
import { AuthCTA } from './components/AuthCTA';
import { TopBarRight } from './components/TopBarRight';

export const TopBar = () => {
  const isAuthenticated = false;
  return (
    <Container>
      <TopBarLeft>LinkUp</TopBarLeft>
      {isAuthenticated ? <TopBarRight /> : <AuthCTA />}
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: ${SC.LAYOUT.NAV_BAR_HEIGHT};
  margin: 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
  padding: 0 5rem;
`;

const TopBarLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1778f2;
`;
