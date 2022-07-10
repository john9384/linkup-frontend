import styled from 'styled-components'
import { avatars } from 'app/assets/imageLinks'
import { PostCard } from './PostCard'

export const Feeds = () => {
  const data = [
    {
      avatar: avatars[0],
      name: 'John Doe',
      username: 'johndoe',
      postText:
        'This is the first post on the mock figma design being created so enjoy the rest of the design. Get inspired the design will have amazing pictures from the unsplash plugin.',
      imageLinks: [
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      ],
    },
    {
      avatar: avatars[0],
      name: 'John Doe',
      username: 'johndoe',
      postText:
        'This is the first post on the mock figma design being created so enjoy the rest of the design. Get inspired the design will have amazing pictures from the unsplash plugin.',
      imageLinks: [
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      ],
    },
    {
      avatar: avatars[0],
      name: 'John Doe',
      username: 'johndoe',
      postText:
        'This is the first post on the mock figma design being created so enjoy the rest of the design. Get inspired the design will have amazing pictures from the unsplash plugin.',
      imageLinks: [
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      ],
    },
    {
      avatar: avatars[0],
      name: 'John Doe',
      username: 'johndoe',
      postText:
        'This is the first post on the mock figma design being created so enjoy the rest of the design. Get inspired the design will have amazing pictures from the unsplash plugin.',
      imageLinks: [
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      ],
    },
  ]
  return (
    <Container>
      {data.map(feed => (
        <PostCard {...feed} />
      ))}
    </Container>
  )
}

const Container = styled.div``
