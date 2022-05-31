import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function Signup() {
  return (
    <>
      <Helmet>
        <title>Signup</title>
        <meta name="Signup" content="" />
      </Helmet>
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
`;
