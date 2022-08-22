import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputContainer = styled.div`
    grid-column: 1 / 6;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    margin-bottom: 4px;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #45464A;
`

const StyledInput = styled.input`
    padding: 8px;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #45464A;
    border: 2px solid #B1B2B4;
    border-radius: 4px;

    &:focus {
        outline-color: #4BA8DD;
    }

    &:disabled {
        opacity: 0.6;
    }
`

const HelperText = styled.p`
    margin: 4px 0px 0px 0px;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #45464A;
`

export default function Input(props) {
    const { 
        id,
        label, 
        onchange, 
        disabled ,
        helperText
    } = props

  return (
    <InputContainer>
        <Label>{label}</Label>
        <StyledInput 
            id={id}
            type={'text'}
            onChange={onchange}
            disabled={disabled}
        />
        {helperText ? <HelperText>{helperText}</HelperText> : null }
        
    </InputContainer>
  )
}

Input.propTypes = {
    /**
     * Id passed to the input element
     */
    id: PropTypes.string,
    /**
     * String that gets applied to the label element
     */
    label: PropTypes.string,
    /**
     * String that gets applied to the input's placeholder
     */
    placeholder: PropTypes.string,
    /**
     * String that gets applied ot the helper text
     */
    helperText: PropTypes.string,
    /**
     * Disables the input element if true
     */
    disabled: PropTypes.bool,
    /**
     * Function to call when input is changed
     */
    onchange: PropTypes.func
}