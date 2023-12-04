import React from "react";
import Country from "./Country";

const VisitedCountryList = ({ visitedCountries, onToggleVisited }) => {
const visitedCountriesMapped =
    visitedCountries && visitedCountries.length > 0
    ? visitedCountries.map((country, index) => {
        return (
            <div key={index}>
            <Country country={country} />
            <button onClick={() => onToggleVisited(country)}>Toggle Visited</button>
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