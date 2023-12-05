import Country from "./Country";

const CountryList = ({countries, onToggleVisited, onToggleDetails, countryDetails }) => {
    // const countriesToDisplay = countries || [];

    const countriesMapped = countries 
    ? countries.map((country, index) =>
    <div>
        <Country key={index} 
        country={country}
        onToggleVisited={onToggleVisited}
        onToggleDetails={onToggleDetails}
        showDetails={countryDetails[
        country.name.common
        ]}
        className="country-container"/>
    </div>
    ) 
    : "not loaded yet";


    return ( 
        <>
        <h2>Countries</h2>

        {countriesMapped}
        </>
    );
}

export default CountryList;


// const countryInfo = countries ? countries.map((country, index) => <Country key={index} country={country}></Country> ) : <p>loading countries</p>
    // console.log(countries)