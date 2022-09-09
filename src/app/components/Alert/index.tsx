import styled from 'styled-components'
import { Alert, AlertTitle, Slide } from '@mui/material'
import { useTimeout } from '../../../hooks/useTimeout'

interface Props {
  type: string
  message: string
  unmountMethod: any
}

export const AlertDiv = ({ type, message, unmountMethod }: Props) => {
  useTimeout(() => {
    unmountMethod()
  }, 2000)

  const renderAlert = () => {
    switch (type) {
      case 'success':
        return (
          <Alert severity="success" onClose={unmountMethod}>
            <AlertTitle>Success</AlertTitle>
            {message}
          </Alert>
        )
      case 'error':
        return (
          <Alert severity="error" onClose={unmountMethod}>
            <AlertTitle>Error</AlertTitle>
            {message}
          </Alert>
        )
      case 'warning':
        return (
          <Alert severity="warning" onClose={unmountMethod}>
            <AlertTitle>Warning</AlertTitle>
            {message}
          </Alert>
        )
      case 'info':
        return (
          <Alert severity="info" onClose={unmountMethod}>
            <AlertTitle>Info</AlertTitle>
            {message}
          </Alert>
        )
      default:
        return (
          <Alert severity="info" onClose={unmountMethod}>
            <AlertTitle>Info</AlertTitle>
            {message}
          </Alert>
        )
    }
  }

  return (
    <Container direction="down" in={true} mountOnEnter unmountOnExit>
      {renderAlert()}
    </Container>
  )
}

const Container = styled(Slide)`
  min-width: 20rem;
  max-width: 30rem;
  font-size: 18px;
  position: fixed;
  top: 5rem;
  left: calc(50% - 10rem);
  /* transform: translateX(-50%) !important; */
`
