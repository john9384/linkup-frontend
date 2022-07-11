import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { ButtonPry, ButtonSec, ButtonText } from 'app/components/Button'
import FacebookIcon from '../../assets/facebook.png'
import GoogleIcon from '../../assets/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { authActions } from '../../slice'
import { useDispatch, useSelector } from 'react-redux'
import { errorSelector } from '../../slice/selectors'
import { AlertDiv } from '../../../../components/Alert'

interface ILogin {
  email: string
  password: string
}

export function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector(errorSelector)
  const [formState, setFormState] = React.useState<ILogin>({
    email: '',
    password: '',
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

  const loginUser = e => {
    e.preventDefault()
    console.log(formState)
    dispatch(
      authActions.loginUser({
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
        <title>Login</title>
        <meta name="Login" content="" />
      </Helmet>
      <Container>
        <FormHead>
          <Title>User Login</Title>
          <Link to="/auth/signup">
            <ButtonSec>
              <ButtonText>Signup</ButtonText>
            </ButtonSec>
          </Link>
        </FormHead>
        <Form>
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
          <Span to="/auth/forgot-password">Forgot Password</Span>
          <SubmitButton disabled={submitDisabled} onClick={loginUser}>
            <ButtonText>Login</ButtonText>
          </SubmitButton>
        </Form>
        <OAuthButtons>
          <ServiceButton>
            <BtnIcon src={GoogleIcon}></BtnIcon>
            <BtnText>Login with google</BtnText>
          </ServiceButton>
          <ServiceButton>
            <BtnIcon src={FacebookIcon}></BtnIcon>
            <BtnText>Login with facebook</BtnText>
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
const Span = styled(Link)`
  color: #1778f2;
  align-self: flex-end;
  margin: 1rem 1rem 1rem 0;
`
