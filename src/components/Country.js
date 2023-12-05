const Country = ({ country, onToggleVisited, onToggleDetails, showDetails }) => {

    console.log(country);

    if (!country) {
      return null; // Handle the case where country is not available
    }

    const { name, capital, languages } = country;

    const renderLanguages = () => {
    if (!languages || typeof languages !== "object") {
        return null;
    }

    return (
        <>
        <h4>Languages:</h4>
        <ul>
            {Object.values(languages).map((language, index) => (
            <li key={index}>{`${language}`}</li>
            ))}
        </ul>
        </>
    );
    };

    return (
    <>
        <h3>Country Name: {name?.common}</h3>
        <h4>Capital(s): {capital}</h4>
        <button onClick={() => onToggleVisited(country)}>Toggle Visited</button>
        <button onClick={() => onToggleDetails(name?.common)}>Toggle Details</button>
        {showDetails && (
        <div>
            <h4>Additional Details:</h4>
            <p>Area: {country.area} square kilometers</p>
            <p>Population: {country.population}</p>
          {/* Add more details as needed */}
        </div>
        )}
        {renderLanguages()}

    </>
    );
};

export default Country;