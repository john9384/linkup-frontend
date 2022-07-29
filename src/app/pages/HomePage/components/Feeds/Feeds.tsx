import React from 'react'
import styled from 'styled-components'
import { PostCard } from './PostCard'
import { PostCardSkeleton } from './PostCardSkeleton'
import useFetchPostList from 'hooks/useFetchPosts'

export const Feeds = () => {
  const [pageNumber, setPageNumber] = React.useState(0)
  const { loading, posts, hasMore } = useFetchPostList({ pageNumber })

  const observer = React.useRef<any>()
  const lastElementRef = React.useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  if (loading || posts == null) {
    return <PostCardSkeleton />
  }

  return (
    <Container>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          console.log('hello there')
          return (
            <div ref={lastElementRef}>
              <PostCard key={index} {...post} />
            </div>
          )
        } else {
          return <PostCard key={index} {...post} />
        }
      })}
    </Container>
  )
}

const Container = styled.div``
