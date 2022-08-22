import React from 'react'
import styled from 'styled-components'
import { Heading3 } from '../../theme/type'

const FormContainer = styled.form`
    grid-column: 5 / 9;
    background: #FFFFFF;
    border: 2px solid #2D2E31;
    box-shadow: 6px 6px 0px rgba(45, 46, 49, 0.14);
    border-radius: 2px;

    & > h3 {
        margin-bottom: 12px;
    }
`

export default function Form() {
  return (
        <FormContainer>
            <Heading3>Form heading</Heading3>
            <label>Label</label>
            <input />
            <div>
                <button>BUtton</button>
            </div>
        </FormContainer>
  )
}
