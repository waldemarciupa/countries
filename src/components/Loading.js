import React from 'react'
import styled from 'styled-components'

const StyledLoading = styled.p`
    font-size: 2em;
    color: #DB7093;
    margin: 45vh auto;
    text-align: center;
`

function Loading() {
    return (
        <StyledLoading>Loading...</StyledLoading>
    )
}

export default Loading