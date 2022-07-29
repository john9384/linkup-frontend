import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { Feeds } from './components/Feeds'
import { PostForm } from './components/PostForm'
import { Statuses } from './components/Statuses'
import { usePostSlice } from '../../slices/posts/index'

export function HomePage() {
  usePostSlice()
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
