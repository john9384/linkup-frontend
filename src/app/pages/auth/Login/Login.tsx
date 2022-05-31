import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function Login() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="Home" content="" />
      </Helmet>
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
`;
