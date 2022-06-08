import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ButtonPry, ButtonSec, ButtonText } from 'app/components/Button';
import FacebookIcon from '../../assets/facebook.png';
import GoogleIcon from '../../assets/google.png';
import { Link } from 'react-router-dom';

export function Signup() {
  return (
    <>
      <Helmet>
        <title>Signup</title>
        <meta name="Login" content="" />
      </Helmet>
      <Container>
        <FormHead>
          <Title>User Signup</Title>
          <Link to="/auth/login">
            <ButtonSec>
              <ButtonText>Login</ButtonText>
            </ButtonSec>
          </Link>
        </FormHead>
        <Form>
          <NameSection>
            <NameField>
              <InputField type="text" placeholder="Firstname" />
            </NameField>
            <NameField>
              <InputField type="text" placeholder="Lastname" />
            </NameField>
          </NameSection>
          <FormField>
            <InputField type="email" placeholder="Email" />
          </FormField>
          <FormField>
            <InputField type="password" placeholder="Password" />
          </FormField>
          <FormField>
            <InputField type="password" placeholder="Confirm Password" />
          </FormField>
          <SubmitButton>
            <ButtonText>Signup</ButtonText>
          </SubmitButton>
        </Form>
        <OAuthButtons>
          <ServiceButton>
            <BtnIcon src={GoogleIcon}></BtnIcon>
            <BtnText>Signup with google</BtnText>
          </ServiceButton>
          <ServiceButton>
            <BtnIcon src={FacebookIcon}></BtnIcon>
            <BtnText>Signup with facebook</BtnText>
          </ServiceButton>
        </OAuthButtons>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const FormHead = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #505d6f;
`;

const Form = styled.form`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const NameSection = styled.div`
  width: 40rem;
  display: flex;
  gap: 1rem;
`;

const NameField = styled(FormField)`
  /* width: 50%; */
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

const OAuthButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
const ServiceButton = styled.button`
  flex: 1;
  border: 2px solid grey;
  border-radius: 30px;
  padding: 1rem 2rem;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const BtnIcon = styled.img``;
const BtnText = styled.span`
  display: block;
`;
