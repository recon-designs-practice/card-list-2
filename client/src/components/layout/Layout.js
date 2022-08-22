import React from 'react'
import styled from 'styled-components'

const GridLayout = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    border: 2px dashed blue;
`

export default function Layout({ children }) {
  return (
    <GridLayout>{children}</GridLayout>
  )
}
