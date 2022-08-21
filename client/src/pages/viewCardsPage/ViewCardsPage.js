import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  grid-column: 1 / 13;
  height: 100vh;
  border: 4px solid purple;
`

export default function ViewCardsPage() {
  return (
    <PageContainer>View Cards Page</PageContainer>
  )
}
