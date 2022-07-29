import styled from 'styled-components'
import './ReactionDiv/icon.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'

export const PostCardSkeleton = () => {
  const len = [1, 2, 3]
  return (
    <>
      {len.map(x => (
        <Container key={x}>
          <PostHead>
            <Avatar />
            <UserDetailDiv>
              <Name></Name>
              <Username></Username>
            </UserDetailDiv>
          </PostHead>
          <PostTextDiv></PostTextDiv>
          <PostTextDiv></PostTextDiv>
          <PostTextDivLast></PostTextDivLast>
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
      ))}
    </>
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
  margin-bottom: 2rem;
`

const Avatar = styled.div`
  height: 5rem;
  width: 5rem;
  background-color: grey;
  border-radius: 5px;
`
const UserDetailDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Name = styled.p`
  height: 1.5rem;
  width: 15rem;
  background-color: grey;
  border-radius: 5px;
`

const Username = styled.p`
  height: 1rem;
  width: 10rem;
  background-color: grey;
  border-radius: 5px;
`
const PostTextDiv = styled.p`
  width: 100%;
  margin: 1rem 0;
  background-color: grey;
  height: 1rem;
  border-radius: 5px;
`
const PostTextDivLast = styled(PostTextDiv)`
  width: 50%;
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
