import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    padding: 10px 12px;
    background: ${props => props.background};
    border: 2px solid #2D2E31;
    box-shadow: 6px 6px 0px rgba(45, 46, 49, 0.14);
    border-radius: 2px;

    &:hover {
        background: ${props => props.hoverbackground};
        cursor: pointer;
    }

    &:active {
        background: ${props => props.activeBackground};
        box-shadow: none;
    }

    & > p {
        color: ${props => props.color};
    }
`

export default function Button({ buttonType, children, onclick }) {
    const {
        background,
        hoverbackground,
        activeBackground,
        color
    } = getButtonStyles(buttonType)

    function getButtonStyles(type) {
        switch (type) {
            case 'primary':
            default:
                return {
                    background: '#0E8AD0',
                    hoverbackground: '#0C76B2',
                    activeBackground: '#0B6BA1',
                    color: '#F2F1EF'
                }
            case 'secondary':
                return {
                    background: 'white',
                    hoverbackground: '#E0DFDE',
                    activeBackground: '#CCCBC9',
                    color: '#2D2E31'
                }
        }
    }

    return (
    <StyledButton 
        onClick={onclick}
        background={background}
        hoverbackground={hoverbackground}
        activeBackground={activeBackground}
        color={color}
    >{children}</StyledButton>
  )
}

Button.propTypes = {
    /**
     * Selects whether button will be displayed with primary, or secondary styling
     */
    buttonType: PropTypes.string,
    /**
     * Children to be passed to the button
     */
    children: PropTypes.any,
    /**
     * Function to be called when button is clicked
     */
    onclick: PropTypes.func
}