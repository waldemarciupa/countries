import React, { useEffect, useState } from "react"
import { useQuery, gql } from "@apollo/client"
import styled from 'styled-components'
import Box from "./Box"
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

function Continents() {
    const { loading, error, data } = useQuery(GET_ALL_CONTINENTS)
    const [continents, setContinents] = useState([])


    useEffect(() => {
        if (data) {
            setContinents(data.continents)
        }
    }, [data])

    if (loading) return <Loading />;
    if (error) return <Error />;

    const StyledContinentsList = styled.ul`
        margin: 0;
        padding: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `

    return (
        <StyledContinentsList>
            {continents.map((continent) => {
                return (
                    <Box key={continent.code} href={continent.code} name={continent.name} code={continent.code} />
                )
            })}
        </StyledContinentsList >
    )
}

export default Continents