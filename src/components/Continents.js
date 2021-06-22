import React, { useEffect, useState } from "react"
import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Loading from "./Loading"
import Error from "./Error"

export const GET_ALL_CONTINENTS = gql`
  query GetAllContinents {
    continents {
      code
      name
    }
  }
`

const StyledContinentsList = styled.ul`
    margin: 0;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const StyledContinent = styled.li`
    list-style: none;
    background: #ffefd5;
    font-size: 1em;
    margin: 1em;
    border: 2px solid #DB7093;
    border-radius: 3px;
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

function Continents() {
    const { loading, error, data } = useQuery(GET_ALL_CONTINENTS)
    const [continents, setContinents] = useState([])

    useEffect(() => {
        if (data) {
            setContinents(data.continents)
        }
    }, [data])

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <StyledContinentsList>
            {continents.map((continent) => {
                return (
                    <StyledContinent key={continent.code}>
                        <StyledLink to={`/continents/${continent.code}`}>
                            <StyledName>{continent.name}</StyledName>
                            <p>{continent.code}</p>
                            <p>{continent.emoji}</p>
                        </StyledLink>
                    </StyledContinent>
                )
            })}
        </StyledContinentsList >
    )
}

export default Continents