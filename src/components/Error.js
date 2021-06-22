import React from 'react'
import styled from 'styled-components'

const StyledError = styled.p`
    font-size: 2em;
    color: #ff0000;
    margin: 45vh auto;
    text-align: center;
`

function Error() {
    return (
        <StyledError>Something went wrong :(</StyledError>
    )
}

export default Error