import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import IllustrationOne from 'app/assets/undraw/illustration1.svg'
import IllustrationTwo from 'app/assets/undraw/illustration3.svg'
import IllustrationThree from 'app/assets/undraw/illustration2.svg'

interface Props {
  children: React.ReactNode
}

export const AuthPageLayout = React.memo(({ children }: Props) => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="Home" content="" />
      </Helmet>
      <Page>
        <TopBarLeft>LinkUp</TopBarLeft>
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
  )
})

const Page = styled.div`
  height: 100vh;
  max-height: 100vh;
`
const Container = styled.div`
  height: 100vh;
  padding: 5rem;
  display: flex;
  align-items: center;
  gap: 10rem;
`
const Right = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IllustrationDiv = styled.div`
  position: relative;
  height: 55rem;
  width: 70rem;
`
const Illustration = styled.img`
  width: 35rem;
  height: 30rem;

  &:nth-child(2) {
    position: absolute;
    top: -5rem;
    right: 0;
  }
  &:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 20rem;
  }
`
const TopBarLeft = styled.div`
  position: fixed;
  top: 5rem;
  left: 5rem;
  align-items: center;
  font-size: 3.5rem;
  font-weight: 700;
  color: #1778f2;
  padding-left: 5rem;
`
