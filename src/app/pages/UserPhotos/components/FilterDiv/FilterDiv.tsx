import { ButtonPry, ButtonSec, ButtonText } from 'app/components/Button'
import TuneIcon from '@mui/icons-material/Tune'
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing'
import styled from 'styled-components/macro'
import './icon.css'

export const FilterDiv = () => {
  return (
    <Container>
      <ButtonsDiv>
        <ButtonPry>
          <ButtonText>All</ButtonText>
        </ButtonPry>
        <ButtonSec>
          <ButtonText>Friends</ButtonText>
        </ButtonSec>
      </ButtonsDiv>
      <Actions>
        <ActionButton>
          <TuneIcon className="icon" />
          <ActionText>Filter</ActionText>
        </ActionButton>
        <ActionButton>
          <FormatLineSpacingIcon className="icon" />
          <ActionText> Sort</ActionText>
        </ActionButton>
      </Actions>
    </Container>
  )
}

const Container = styled.div`
  background: white;
  padding: 0.5rem 1px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.5s;
`

const ButtonsDiv = styled.div`
  display: flex;
  gap: 2rem;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
const ActionText = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`
const ActionButton = styled.div`
  display: flex;
  align-items: center;
`
