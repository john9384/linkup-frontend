import React from 'react'
import styled from 'styled-components'
import GoogleIcon from '../../assets/google.png'
import GoogleLogin from 'react-google-login'

export const GoogleButton = () => {
  const responseGoogle = response => {
    console.log(response)
  }
  return (
    <GoogleLogin
      clientId="531191033939-epafqnr0obdvtkgn4302nm1brafri06p.apps.googleusercontent.com"
      render={renderProps => (
        <ServiceButton
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <BtnIcon src={GoogleIcon}></BtnIcon>
          <BtnText>Signin with google</BtnText>
        </ServiceButton>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  )
}

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
