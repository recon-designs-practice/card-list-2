import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  grid-column: 1 / 13;
  height: 100vh;
  border: 4px solid red;
`

export default function AddCardPage() {
  return (
    <PageContainer>Add Card Page</PageContainer>
  )
}
