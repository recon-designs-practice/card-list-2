import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
  margin: 0px;
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  color: #2D2E31;
`

export default function Heading1({ children }) {
  return (
    <H3>{children}</H3>
  )
}
