import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { ImageGrid } from './ImageGrid'
import { Avatar } from './Avatar'
import './ReactionDiv/icon.css'
import { avatars } from 'app/assets/imageLinks'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { postActions } from '../../../../slices/posts'
import { useDispatch, useSelector } from 'react-redux'
import { postListSelector } from 'app/slices/posts/selectors'

interface Props {
  // id: string
  // user: any
  // content: string
  // images?: string[]
  // likes: string[]
  [key: string]: any
}

export const PostCard = React.memo((props: Props) => {
  const { id, user, content, images, currentUser } = props
  const [isLiked, setIsLiked] = React.useState(props.isLiked)
  const posts = useSelector(postListSelector)
  const likeIconColor = isLiked ? 'blue' : 'inherit'
  const dispatch = useDispatch()

  const toggleLikePost = () => {
    if (!isLiked) {
      setIsLiked(true)
      const post = posts.find(post => post.id === id)
      const likes = post.likes
      const uniqueLikes = _.uniq([...likes, currentUser.id])

      dispatch(
        postActions.updatePost({
          postId: id,
          formData: { likes: uniqueLikes },
        }),
      )
    } else {
      setIsLiked(false)
      const post = posts.find(post => post.id === id)
      const likes = post.likes
      const updatedLikes = _.remove(likes, currentUser.id)
      dispatch(
        postActions.updatePost({
          postId: id,
          formData: { likes: updatedLikes },
        }),
      )
    }
  }

  return (
    <Container>
      <PostHead>
        <Avatar imgSrc={avatars[0]} />
        <UserDetailDiv>
          <Name>{user.fullname}</Name>
          <Username>@{user.username || ''}</Username>
        </UserDetailDiv>
      </PostHead>
      <PostTextDiv>{content}</PostTextDiv>
      {images && images.length > 0 && <ImageGrid imageLinks={images} />}
      <ReactionDiv>
        <ReactionButton onClick={toggleLikePost}>
          <FavoriteBorderIcon
            className="icon"
            style={{ color: likeIconColor }}
          />
        </ReactionButton>
        <ReactionButton>
          <ChatBubbleOutlineIcon className="icon" />
        </ReactionButton>
        <ReactionButton>
          <ShareIcon className="icon" />
        </ReactionButton>
        <ReactionButton>
          <BookmarkBorderRoundedIcon className="icon" />
        </ReactionButton>
      </ReactionDiv>
    </Container>
  )
})

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
`
const PostHead = styled.div`
  display: flex;
  gap: 2rem;
`
const UserDetailDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Name = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`

const Username = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.46);
`
const PostTextDiv = styled.p`
  width: 100%;
  margin: 2rem auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #8a8a8a;
`

const ReactionDiv = styled.div`
  display: flex;
  margin-top: 2rem;
`
const ReactionButton = styled.div`
  &:last-child {
    width: fit-content;
    margin-left: auto;
  }
`
