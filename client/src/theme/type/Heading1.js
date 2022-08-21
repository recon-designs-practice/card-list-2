import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  margin: 0px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #2D2E31;
`

export default function Heading1({ children }) {
  return (
    <H1>{children}</H1>
  )
}
