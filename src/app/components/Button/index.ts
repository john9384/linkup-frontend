import styled from 'styled-components/macro'

const Button = styled.button`
  border: none;
  width: 11rem;
  height: 40px;

  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ButtonText = styled.span`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
`

export const ButtonPry = styled(Button)`
  background: #1778f2;
  color: #ffffff;
`

export const ButtonSec = styled(Button)`
  background: transparent;
  color: #1778f2;
  border: 1px solid #1778f2;
`
