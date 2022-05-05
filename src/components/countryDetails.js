import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = ({ countries }) => {

    const { country_id } = useParams()

    let foundCountry = countries.find(elm => elm.alpha3Code === country_id)

    return (
        <section className="details">
            <img src="" alt="flag"></img>
            <h2>{foundCountry.name.official}</h2>
            <p>Capital:{foundCountry.capital} </p>
            <p>Area:{foundCountry.area}</p>
        </section>
    )
}

export default CountryDetails