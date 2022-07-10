import styled from 'styled-components'
import { ImageGrid } from './ImageGrid'
import { Avatar } from './Avatar'
import './ReactionDiv/icon.css'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'

interface Props {
  avatar: string
  name: string
  username: string
  postText: string
  imageLinks?: string[]
}
export const PostCard = (props: Props) => {
  return (
    <Container>
      <PostHead>
        <Avatar imgSrc={props.avatar} />
        <UserDetailDiv>
          <Name>{props.name}</Name>
          <Username>@{props.username}</Username>
        </UserDetailDiv>
      </PostHead>
      <PostTextDiv>{props.postText}</PostTextDiv>
      {props.imageLinks && props.imageLinks.length > 0 && (
        <ImageGrid imageLinks={props.imageLinks} />
      )}
      <ReactionDiv>
        <ReactionButton>
          <FavoriteBorderIcon className="icon" />
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
}

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
