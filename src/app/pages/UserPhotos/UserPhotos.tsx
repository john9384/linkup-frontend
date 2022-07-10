import { Helmet } from 'react-helmet-async'
import styled from 'styled-components/macro'
import { FilterDiv } from './components/FilterDiv'
import { PeopleList } from './components/PeopleList'

export const UserPhoto = () => {
  return (
    <>
      <Helmet>
        <title>People</title>
        <meta name="People" content="" />
      </Helmet>
      <Container>
        <FilterDiv />
        <PeopleList />
      </Container>
    </>
  )
}

const Container = styled.div``
