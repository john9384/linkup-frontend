import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function Login() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="Home" content="" />
      </Helmet>
      <Container>Hello login</Container>
    </>
  );
}

const Container = styled.div``;
const Form = styled.form``;
