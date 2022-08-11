import React from 'react'
import styled from 'styled-components'
import { PostCard } from './PostCard'
import useFetchPostList from 'hooks/useFetchPosts'
import { LoadingIcon } from 'app/components/LoadingIcon'
import useFetchCurrentUserProfile from 'hooks/useFetchCurrentUserProfile'

export const Feeds = () => {
  const [pageNumber, setPageNumber] = React.useState(0)
  const { loading, posts, hasMore } = useFetchPostList({ pageNumber })
  const { user: currentUser, loading: profileLoading } =
    useFetchCurrentUserProfile()

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

  if (loading || profileLoading || posts == null || currentUser == null) {
    return <LoadingIcon />
  }

  return (
    <Container>
      {posts.map((post, index) => {
        const props = {
          id: post._id,
          ...post,
          currentUser,
        }

        if (posts.length === index + 1) {
          return (
            <div ref={lastElementRef}>
              <PostCard key={post._id} {...props} />
            </div>
          )
        } else {
          return <PostCard key={post._id} {...props} />
        }
      })}
    </Container>
  )
}

const Container = styled.div``
