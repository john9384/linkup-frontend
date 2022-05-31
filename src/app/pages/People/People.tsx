import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { FilterDiv } from './components/FilterDiv';
import { PeopleList } from './components/PeopleList';

export const People = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="Home" content="" />
      </Helmet>
      <Container>
        <FilterDiv />
        <PeopleList />
      </Container>
    </>
  );
};

const Container = styled.div``;
