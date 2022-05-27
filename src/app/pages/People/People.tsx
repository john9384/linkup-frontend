import styled from 'styled-components/macro';
import { FilterDiv } from './components/FilterDiv';
import { PeopleList } from './components/PeopleList';

export const People = () => {
  return (
    <Container>
      <FilterDiv />
      <PeopleList />
    </Container>
  );
};

const Container = styled.div``;
