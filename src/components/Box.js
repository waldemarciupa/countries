import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

function Box({ href, name, code }) {

    const StyledContinent = styled.li`
        list-style: none;
        background: #ffefd5;
        font-size: 1em;
        margin: 1em;
        border: 2px solid #DB7093;
        border-radius: 3px;
        text-decoration: none;
        width: 200px;
        min-height: 200px;
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: #DB7093;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    `

    const StyledName = styled.p`
        font-size: 1.5em;
    `

    return (
        <StyledContinent>
            <StyledLink to={`/continents/${href}`}>
                <StyledName>{name}</StyledName>
                <p>{code}</p>
            </StyledLink>
        </StyledContinent>
    )
}

export default Box
