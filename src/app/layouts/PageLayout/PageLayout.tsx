import React from 'react'
import styled from 'styled-components/macro'
import { LeftSideBar } from '../LeftSideBar'
import { RightSideBar } from '../RightSideBar'
import { TopBar } from '../TopBar'
import { StyleConstants as SC } from 'styles/StyleConstants'

interface Props {
  children: React.ReactNode
}

export const PageLayout = React.memo(({ children }: Props) => {
  return (
    <Page>
      <TopBar />
      <Container>
        <LeftSideBar />
        <Main>{children}</Main>
        <RightSideBar />
      </Container>
    </Page>
  )
})

const Page = styled.div`
  height: 100vh;
  max-height: 100vh;
`
const Container = styled.div`
  background-color: transparent;
  display: flex;
  gap: 3rem;
  padding: 2rem 5rem;
  width: 100vw;
  height: ${SC.LAYOUT.PAGE_BODY_HEIGHT};
`

const Main = styled.div`
  height: 100%;
  flex: 4.5;
  max-width: 52%;
  /* overflow-y: auto; */
  padding: 0 1rem;
  padding-bottom: 8rem;
  width: 60px;
  margin: 60px auto;
`
