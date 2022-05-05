import { Link } from 'react-router-dom'
import CountryDetails from './countryDetails';

function CountriesList({ countries }) {
    return (

        countries.map(country => {




            return (
                countries.map((country) => {
                    return (
                        <div className="list" key={country.alpha3Code} className="card">
                            <h3><Link to={`/detalles/${country.alpha3Code}`}>{country.name.official}</Link></h3>
                        </div>
                    )
                })
            )

        })
    )
}

export default CountriesList;