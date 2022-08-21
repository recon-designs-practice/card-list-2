import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Heading1 } from '../../theme/type'

const StyledHeader = styled.header`
  display: flex;
  border: 2px solid black;
`

export default function Header(props) {
  const { title, children } = props

  return (
    <StyledHeader>
      <Heading1>{title}</Heading1>
      {children}
    </StyledHeader>
  )
}

Header.propTypes = {
  /**
   * Title printed at in Header
   */
  title: PropTypes.string.isRequired,
  /**
   * Children to be passed to Header
   */
  children: PropTypes.any
}