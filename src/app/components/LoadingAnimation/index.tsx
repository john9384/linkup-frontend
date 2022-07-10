import React from 'react'
import styled from 'styled-components'
import './icon.css'

export const LoadingAnimation = () => {
  return (
    <Page>
      <Bg></Bg>
      <div className="loadingio-spinner-pulse-y26ysvtjex">
        <div className="ldio-njkps3yl3n">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Page>
  )
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1778f2;
  z-index: 9999;
  opacity: 0.5;
`
const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
`

//  #1778f2
