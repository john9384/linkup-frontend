import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { ButtonPry, ButtonSec, ButtonText } from 'app/components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { CodeFormField } from '../../common/CodeFormField/index'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../../slices/auth'

export function VerifyEmail() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [code, setCode] = React.useState('')

  const verifyToken = e => {
    e.preventDefault()
    console.log(code)
    dispatch(
      authActions.verifyUserEmail({
        formData: { token: code },
        navigate,
      }),
    )
  }

  return (
    <>
      <Helmet>
        <title>Verify Email</title>
        <meta name="Verify Email" content="" />
      </Helmet>
      <Container>
        <FormHead>
          <Title>Verify Email</Title>
          <Link to="/auth/login">
            <ButtonSec>
              <ButtonText>Login</ButtonText>
            </ButtonSec>
          </Link>
        </FormHead>
        <Form>
          <CodeFormField setParentState={setCode} />
          <SubmitButton onClick={verifyToken}>
            <ButtonText>Verify Email</ButtonText>
          </SubmitButton>
        </Form>
      </Container>
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

const SubmitButton = styled(ButtonPry)`
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
`
