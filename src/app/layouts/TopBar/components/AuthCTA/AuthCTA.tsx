import styled from 'styled-components'
import { ButtonSec, ButtonText } from 'app/components/Button/index'
export const AuthCTA = () => {
  return (
    <Container>
      <ButtonSec>
        <ButtonText>Signup</ButtonText>
      </ButtonSec>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
