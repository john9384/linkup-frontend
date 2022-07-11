import React from 'react'
import styled from 'styled-components'
import './icon.css'

export const LoadingAnimation = () => {
  return (
    <Page>
      <div className="lds-hourglass"></div>
    </Page>
  )
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`
