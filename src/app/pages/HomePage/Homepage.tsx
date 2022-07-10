import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { Feeds } from './components/Feeds'
import { PostForm } from './components/PostForm'
import { Statuses } from './components/Statuses'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="Home" content="" />
      </Helmet>
      <Container>
        <Statuses />
        <PostForm />
        <Feeds />
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
`
