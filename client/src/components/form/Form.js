import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from '../../components'
import { Heading3, Paragraph1 } from '../../theme/type'

const FormContainer = styled.form`
    grid-column: 5 / 9;
    padding: 20px;
    background: #FFFFFF;
    border: 2px solid #2D2E31;
    box-shadow: 6px 6px 0px rgba(45, 46, 49, 0.14);
    border-radius: 2px;

    & > h3 {
        margin-bottom: 12px;
    }
`

const Wrapper = styled.div`
    margin-top: 12px;
`

export default function Form(props) {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const { title } = props

    function handleInputChange(e, setter) {
        const { value } = e.target

        setter(() => value)
    }

    function handleClick(e) {
        e.preventDefault()

        const newFormObj = {
            firstName,
            lastName
        }
        console.log(newFormObj)
    }
   
  return (
        <FormContainer>
            <Heading3>{title}</Heading3>
            <Input 
                id={"firstNameInput"}
                label={"First name"}
                onchange={(e) => handleInputChange(e, setFirstName)}
            />
                
            <Input 
                id={"firstNameInput"}
                label={"Last name"}
                onchange={(e) => handleInputChange(e, setLastName)}
            />

            <Input 
                id={"firstNameInput"}
                label={"Last name"}
                onchange={(e) => handleInputChange(e, setLastName)}
            />

            <Input 
                id={"firstNameInput"}
                label={"Last name"}
                onchange={(e) => handleInputChange(e, setLastName)}
            />

            <Input 
                id={"firstNameInput"}
                label={"Last name"}
                onchange={(e) => handleInputChange(e, setLastName)}
            />

            <Input 
                id={"firstNameInput"}
                label={"Last name"}
                onchange={(e) => handleInputChange(e, setLastName)}
            />
            <Wrapper>
                <Button onclick={(e) => handleClick(e)}><Paragraph1>Save</Paragraph1></Button>
            </Wrapper>
        </FormContainer>
  )
}

Form.propTypes = {
    /**
     * String to be passed to the title of the form
     */
    title: PropTypes.string.isRequired
}