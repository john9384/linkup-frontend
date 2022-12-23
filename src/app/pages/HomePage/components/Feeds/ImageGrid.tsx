import styled from 'styled-components'

interface Props {
  imageLinks: string[]
}
export const ImageGrid = ({ imageLinks }: Props) => {
  console.log(imageLinks)
  let links: string[] = imageLinks
  if (imageLinks.length > 4) {
    links = imageLinks.slice(0, 4)
  }
  console.log(links)
  return (
    <Container>
      {links.map((link, index) => {
        switch (imageLinks.length) {
          case 1:
            return <ImgDivBasic key={index} link={link} />
          case 2:
            return <ImgDivBasic key={index} link={link} />
          case 3:
            return <ImgDivTreble key={index} link={link} />
          case 4:
            return <ImgDivQuart key={index} link={link} />
          default:
            return <ImgDivQuart key={index} link={link} />
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
  console.log(link)
  return (
    <BasicGrid>
      {link.includes('mp4') ? <Video src={link} /> : <Img src={link} />}
    </BasicGrid>
  )
}

const ImgDivTreble = ({ link }) => {
  console.log(link)
  return (
    <TrebleGrid>
      {link.includes('mp4') ? <Video src={link} /> : <Img src={link} />}
    </TrebleGrid>
  )
}

const ImgDivQuart = ({ link }) => {
  console.log(link)
  return (
    <ImgDiv>
      {link.includes('mp4') ? <Video src={link} /> : <Img src={link} />}{' '}
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
const Vid = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Video = ({ src }: { src: string }) => {
  return (
    <Vid controls>
      <source src={src} type="video/mp4" />
    </Vid>
  )
}
