import React from 'react'
import styled from 'styled-components'

const P1 = styled.p`
  margin: 0px;
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #F2F1EF;
`

export default function Paragraph1({ children }) {
  return (
    <P1>{children}</P1>
  )
}
