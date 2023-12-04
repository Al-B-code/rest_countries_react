import React from "react";
import Country from "./Country";

const VisitedCountryList = ({ visitedCountries, onToggleVisited, onToggleDetails, countryDetails}) => {
const visitedCountriesMapped =
    visitedCountries && visitedCountries.length > 0
    ? visitedCountries.map((country, index) => {
        return (
        <div>
            <Country key={index} 
            country={country}
            onToggleVisited={onToggleVisited}
            onToggleDetails={onToggleDetails}
            showDetails={countryDetails[
            country.name.common
            ]}/>
        </div>
        );
        })
    : "No visited countries yet";

return (
    <>
    <h2>Visited Countries</h2>
    {visitedCountriesMapped}
    </>
    );
};

export default VisitedCountryList;