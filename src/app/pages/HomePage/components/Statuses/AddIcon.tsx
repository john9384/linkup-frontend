import styled from 'styled-components'

export const StatusAddIcon = () => {
  return (
    <OuterDiv>
      <InnerDiv>+</InnerDiv>
    </OuterDiv>
  )
}

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: 1.5px solid white;
  border-radius: 10px;
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
`

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 500;
  color: #3477d2;
`
