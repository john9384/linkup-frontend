import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { ButtonPry, ButtonSec, ButtonText } from 'app/components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../../slices/auth'
import { errorSelector, userSelector } from '../../../../slices/auth/selectors'
import { AlertDiv } from '../../../../components/Alert'
interface ISignup {
  email: string
  newPassword: string
  confirmPassword: string
}

export function ResetPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector(errorSelector)
  const { email: verifiedTokenEmail } = useSelector(userSelector)

  if (!verifiedTokenEmail) {
    navigate('/auth/forgot-password')
  }

  const [formState, setFormState] = React.useState<ISignup>({
    email: verifiedTokenEmail,
    newPassword: '',
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

  const resetUserPassword = e => {
    e.preventDefault()
    dispatch(
      authActions.resetUserPassword({
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
        <title>Reset Password</title>
        <meta name="Reset Password" content="" />
      </Helmet>
      <Container>
        <FormHead>
          <Title>Reset Password</Title>
          <Link to="/auth/login">
            <ButtonSec>
              <ButtonText>Login</ButtonText>
            </ButtonSec>
          </Link>
        </FormHead>
        <Form>
          <FormField>
            <InputField
              type="password"
              placeholder="Password"
              name="newPassword"
              onChange={handleFormChange}
              value={formState.newPassword}
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
          <SubmitButton disabled={submitDisabled} onClick={resetUserPassword}>
            <ButtonText>Reset Password</ButtonText>
          </SubmitButton>
        </Form>
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
  background: '#F5F5F5';
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
