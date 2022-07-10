import styled from 'styled-components'

interface Props {
  imageLinks: string[]
}
export const ImageGrid = ({ imageLinks }: Props) => {
  let links: string[] = imageLinks
  if (imageLinks.length > 4) {
    links = imageLinks.slice(0, 4)
  }

  return (
    <Container>
      {links.map(link => {
        switch (imageLinks.length) {
          case 1:
            return <ImgDivBasic link={link} />
          case 2:
            return <ImgDivBasic link={link} />
          case 3:
            return <ImgDivTreble link={link} />
          case 4:
            return <ImgDivQuart link={link} />
          default:
            return <ImgDivQuart link={link} />
        }
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  grid-template-rows: repeat(2, 200px);
  grid-gap: 1rem;
`

const ImgDivBasic = ({ link }) => {
  return (
    <BasicGrid>
      <Img src={link} />
    </BasicGrid>
  )
}

const ImgDivTreble = ({ link }) => {
  return (
    <TrebleGrid>
      <Img src={link} />
    </TrebleGrid>
  )
}

const ImgDivQuart = ({ link }) => {
  return (
    <ImgDiv>
      <Img src={link} />
    </ImgDiv>
  )
}

const ImgDiv = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

const BasicGrid = styled(ImgDiv)`
  grid-row: span 2;
`

const TrebleGrid = styled(ImgDiv)`
  &:first-child {
    grid-row: span 2;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
