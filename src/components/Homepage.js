import React from 'react'
import styled from 'styled-components'
import {
    Link
} from "react-router-dom"

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled(Link)`
    background: #ffefd5;
    color: #DB7093;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #DB7093;
    border-radius: 3px;
    text-decoration: none;
`;

function Homepage() {
    return (
        <StyledContainer>
            <Button to='/continents'>Continents</Button>
        </StyledContainer>
    )
}

export default Homepage