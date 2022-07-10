import styled from 'styled-components'

export const PostForm = () => {
  return (
    <Form>
      <Input placeholder="What is on your mind, John Doe?" />
      <PostButton>
        <PostButtonText>Post</PostButtonText>
      </PostButton>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background: #ffffff;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`
const Input = styled.input`
  flex: 1;
  height: 40px;
  border-radius: 10px;
  padding-left: 1rem;
  font-size: 1.7rem;
  border: none;
  outline: none;
  &:hover,
  &:active {
    border: none;
    outline: none;
  }
`
const PostButton = styled.button`
  border: none;
  width: 11rem;
  height: 40px;
  background: #1778f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
`

const PostButtonText = styled.span`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
`
