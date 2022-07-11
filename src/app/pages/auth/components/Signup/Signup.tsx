import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { ButtonPry, ButtonSec, ButtonText } from 'app/components/Button'
import FacebookIcon from '../../assets/facebook.png'
import GoogleIcon from '../../assets/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../slice'
import { errorSelector } from '../../slice/selectors'
import { AlertDiv } from 'app/components/Alert'

interface ISignup {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
}
export function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector(errorSelector)
  const [formState, setFormState] = React.useState<ISignup>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true)

  const handleFormChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const checkFormComplete = () => {
    for (const key in formState) {
      if (formState[key] === '') {
        setSubmitDisabled(true)
        return
      }
    }
    setSubmitDisabled(false)
  }

  const signupUser = e => {
    e.preventDefault()
    dispatch(
      authActions.signupUser({
        formData: formState,
        navigate,
      }),
    )
  }

  const clearErrorState = e => {
    dispatch(authActions.setError(null))
  }

  React.useEffect(() => {
    checkFormComplete()
  })
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
              <InputField
                type="text"
                placeholder="Firstname"
                name="firstname"
                onChange={handleFormChange}
                value={formState.firstname}
              />
            </NameField>
            <NameField>
              <InputField
                type="text"
                placeholder="Lastname"
                name="lastname"
                onChange={handleFormChange}
                value={formState.lastname}
              />
            </NameField>
          </NameSection>
          <FormField>
            <InputField
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleFormChange}
              value={formState.email}
            />
          </FormField>
          <FormField>
            <InputField
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleFormChange}
              value={formState.password}
            />
          </FormField>
          <FormField>
            <InputField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleFormChange}
              value={formState.confirmPassword}
            />
          </FormField>
          <SubmitButton disabled={submitDisabled} onClick={signupUser}>
            <ButtonText>Signup</ButtonText>
          </SubmitButton>
        </Form>
        <InfoSection>
          By clicking Create Account, you acknowledge you have read and agreed
          to our <Span to="#">Terms of Use</Span> and
          <Span to="#">Privacy Policy</Span>.
        </InfoSection>
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
      {error && (
        <AlertDiv
          type="error"
          message={error.message}
          unmountMethod={clearErrorState}
        />
      )}
    </>
  )
}

const Container = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FormHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #505d6f;
`

const Form = styled.form`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormField = styled.div`
  height: 5rem;
  width: 40rem;
  background-color: rgba(225, 225, 225, .2);
  border-radius: 10px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.01);
  padding-left: 2rem;
  font-size: 1.6rem;
  border: 1px solid #1778f2;
`

const NameSection = styled.div`
  width: 40rem;
  display: flex;
  gap: 1rem;
`

const NameField = styled(FormField)`
  /* width: 50%; */
`

const InputField = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
`

const SubmitButton = styled(ButtonPry)`
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
`

const OAuthButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`
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
`
const BtnIcon = styled.img``
const BtnText = styled.span`
  display: block;
`
const InfoSection = styled.div`
  color: grey;
  width: 40rem;
`
const Span = styled(Link)`
  color: #1778f2;
`
