import styled from 'styled-components'
import './icon.css'
export const LoadingIcon = () => {
  return (
    <Div>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
