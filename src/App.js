import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/countriesList";
import CountryDetails from "./components/countryDetails";
import Navbar from "./components/navbar";
import countries from './countries.json'

function App() {


  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries} />

      <Routes>
        <Route path='/detalles/:country_id' element={<CountryDetails countries={countries} />} />
      </Routes>

    </div>
  )
}

export default App;
