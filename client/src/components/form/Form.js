import React from 'react'
import styled from 'styled-components'
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
    // border: 1px dashed blue;
`

export default function Form(props) {
    const { inputs } = props
    console.log(inputs)
  return (
        <FormContainer>
            <Heading3>Form heading</Heading3>
            {inputs.map((input) => {
                return (
                    <Input 
                        id={input.id}
                        label={input.label}
                        onchange={input.onchange}
                    />
                )
            })}
            <Wrapper>
                <Button><Paragraph1>Save</Paragraph1></Button>
            </Wrapper>
        </FormContainer>
  )
}
