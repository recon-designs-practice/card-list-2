import React from 'react'
import styled from 'styled-components'
import { Form } from '../../components'

const PageContainer = styled.div`
  grid-column: 1 / 13;
  padding: 20px 0px 20px 0px;
  // height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  // border: 4px solid red;
`

export default function AddCardPage() {
  return (
    <PageContainer>
      <Form title={"Add a card"}></Form>
    </PageContainer>
  )
}
