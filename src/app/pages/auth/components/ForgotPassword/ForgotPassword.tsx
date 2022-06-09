import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ButtonPry, ButtonSec, ButtonText } from 'app/components/Button';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
        <meta name="Login" content="" />
      </Helmet>
      <Container>
        <FormHead>
          <Title>Fogot Password</Title>
          <Link to="/auth/login">
            <ButtonSec>
              <ButtonText>Login</ButtonText>
            </ButtonSec>
          </Link>
        </FormHead>
        <Form>
          <FormField>
            <InputField type="email" placeholder="Email" />
          </FormField>
          <SubmitButton>
            <ButtonText>Request Token</ButtonText>
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #505d6f;
`;

const Form = styled.form`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormField = styled.div`
  height: 5rem;
  width: 40rem;
  background: '#F5F5F5';
  border-radius: 10px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.01);
  padding-left: 2rem;
  font-size: 1.6rem;
  border: 1px solid #1778f2;
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
`;

const SubmitButton = styled(ButtonPry)`
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
`;
