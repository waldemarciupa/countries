import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"
import styled from 'styled-components'
import Loading from "./Loading"
import Error from "./Error"

const StyledCountriesList = styled.ul`
    margin: 0;
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`

const StyledCountry = styled.li`
    list-style: none;
    background: #ffefd5;
    font-size: 1em;
    margin: 1em;
    border: 2px solid #DB7093;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #DB7093;
`

const StyledName = styled.p`
    font-size: 1.5em;
`

function Countries() {
    let { id } = useParams();

    const { loading, error, data } = useQuery(gql`
        query GetAllCountries {
            continent(code: "${id}") {
            countries {
                name
                emoji
                languages {
                name
                }
            }
            }
        }
    `)

    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (data) {
            setCountries(data.continent.countries)
        }
    }, [data])

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <StyledCountriesList>
            {countries.map((country) => {
                return <StyledCountry key={country.emoji}>
                    <StyledName>{country.name}</StyledName>
                    <p>{country.emoji}</p>
                    {country.languages.length ? <p>{country.languages[0].name}</p> : <p>Brak danych</p>}
                </StyledCountry>
            })}
        </StyledCountriesList >
    )
}

export default Countries