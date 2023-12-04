import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";
import { useEffect, useState } from "react";

const CountryListContainer = () => {

    const [countries, setCountries] = useState([]);   // not sure if i actually need to assign the countries to a variable. 
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadAllCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // console.log(data);
        setCountries(data);
    }

    useEffect(() => {
        loadAllCountries()
    }, [])


    const handleToggleVisited = (country) => {
        const countryName = country.name.common;
        // check if the countryName is valid
        if (!countryName) {
            console.error("Invalid country data", countryName);
            return;
        }
    
        if (visitedCountries.some((visitedCountry) => visitedCountry.name.common === countryName)) {
            // Remove from visited countries
            setVisitedCountries(() =>
                visitedCountries.filter((visitedCountry) => visitedCountry.name.common !== countryName)
            );
            // Add to main countries list
            setCountries((previousCountriesState) => [...previousCountriesState, country]);
        } else {
            // Remove from main countries list
            setCountries((previousCountriesState) =>
                previousCountriesState.filter((currentCountry) => currentCountry !== country)
            );
            // Add to visitedCountries
            setVisitedCountries((previousVisitedState) => [...previousVisitedState, country]);
            }
        }
        
    


    return ( 
        <>
        <section className="sectionBoth"> 
            <section className="countries">
                <CountryList 
                countries={countries}
                onToggleVisited={handleToggleVisited}/>
            </section>
            <section className="visitedCountries">
                <VisitedCountryList 
                visitedCountries={visitedCountries}
                onToggleVisited={handleToggleVisited}/>
            </section>
        </section>
        </>
        );
}

export default CountryListContainer;