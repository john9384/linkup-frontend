import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { TopBar } from 'app/layouts/TopBar/index';
import IllustrationOne from 'app/assets/undraw/illustration1.svg';
import IllustrationTwo from 'app/assets/undraw/illustration3.svg';
import IllustrationThree from 'app/assets/undraw/illustration2.svg';

interface Props {
  children: React.ReactNode;
}

export const AuthPageLayout = React.memo(({ children }: Props) => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="Home" content="" />
      </Helmet>
      <Page>
        <TopBar />
        <Container>
          <Left>
            <IllustrationDiv>
              <Illustration src={IllustrationOne} alt="illustration" />
              <Illustration src={IllustrationTwo} alt="illustration" />
              <Illustration src={IllustrationThree} alt="illustration" />
            </IllustrationDiv>
          </Left>
          <Right>{children}</Right>
        </Container>
      </Page>
    </>
  );
});

const Page = styled.div`
  height: 100vh;
  max-height: 100vh;
`;
const Container = styled.div`
  height: calc(100% - 6rem);
  padding: 5rem;
  display: flex;
  gap: 10rem;
`;
const Right = styled.div`
  width: 40%;
  height: 100%;
  background-color: green;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IllustrationDiv = styled.div`
  position: relative;
  height: 60rem;
  width: 70rem;
`;
const Illustration = styled.img`
  width: 35rem;
  height: 30rem;

  &:nth-child(2) {
    position: absolute;
    top: -10rem;
    right: 0;
  }
  &:nth-child(3) {
    position: absolute;
    bottom: 1rem;
    left: 20rem;
  }
`;
