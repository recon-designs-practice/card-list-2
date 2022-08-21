import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    padding: 10px 12px;
    background: #0E8AD0;
    border: 2px solid #2D2E31;
    box-shadow: 6px 6px 0px rgba(45, 46, 49, 0.14);
    border-radius: 2px;

    &:hover {
        background: #0C76B2;
        cursor: pointer;
    }

    &:active {
        background: #0B6BA1;
        box-shadow: none;
    }

    & > p {
        color: #F2F1EF;
    }
`

export default function Button({ children, onclick }) {
  return (
    <StyledButton onClick={onclick}>{children}</StyledButton>
  )
}

Button.propTypes = {
    /**
     * Children to be passed to the button
     */
    children: PropTypes.any,
    /**
     * Function to be called when button is clicked
     */
    onclick: PropTypes.func
}