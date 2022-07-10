import styled from 'styled-components/macro'

export const PeopleList = () => {
  return <Container></Container>
}

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  justify-content: space-between;
`
