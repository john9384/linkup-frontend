import styled from 'styled-components'

interface Props {
  imgSrc: string
  imgAlt?: string
  height?: number
  width?: number
}

export const Avatar = ({ imgSrc }: Props) => {
  return (
    <Div>
      <Img src={imgSrc} alt="#" />
    </Div>
  )
}

const Div = styled.div`
  width: 4rem;
  height: 4rem;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid white;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
