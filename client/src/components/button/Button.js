import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: pink;
`

export default function Button({ children }) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
