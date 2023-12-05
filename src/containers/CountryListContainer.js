import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";
import CountrySearchForm from "../components/CountrySearchForm";
import { useEffect, useState } from "react";

const CountryListContainer = () => {

    const [countries, setCountries] = useState([]);   
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [countryDetails, setCountryDetails] = useState({});
    const [filteredCountries, setFilteredCountries] = useState([]);

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
        
        // check if the countryName is valid
        if (!country || !country.name) {
            console.error("Invalid country data", country);
            return;
            }
        const countryName = country.name.common;
    
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
        const updatedFilteredCountries = filteredCountries.filter((filteredCountry) => filteredCountry.name.common !== countryName);
        setFilteredCountries(updatedFilteredCountries);    
        }
        
        
        const handleToggleDetails = (countryName) => {
            setCountryDetails((previousDetails) => {
                return {...previousDetails,
                    [countryName]: !previousDetails[countryName], 
            }})
        }

        const handleSearch = (searchTerm) => {
            const filteredCountries = countries.filter(
                (country) =>
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredCountries(filteredCountries);
        }



    return ( 
        <>
        <section className="searchForm">
            <CountrySearchForm onSearch={handleSearch} />
        </section>
        <section className="sectionBoth"> 
            <section className="countries">
                <CountryList 
                countries={filteredCountries.length > 0 ? filteredCountries : countries}
                onToggleVisited={handleToggleVisited}
                onToggleDetails={handleToggleDetails}
                countryDetails={countryDetails}/>
            </section>
            <section className="visitedCountries">
                <VisitedCountryList 
                visitedCountries={visitedCountries}
                onToggleVisited={handleToggleVisited}
                onToggleDetails={handleToggleDetails}
                countryDetails={countryDetails}/>
            </section>
        </section>
        </>
        );
}

export default CountryListContainer;