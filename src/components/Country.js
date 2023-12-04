const Country = ({ country }) => { // should be a prop deconstructed here to get the country info.
    // console.log(country.name.common) // returns undefined?
    console.log(country.languages)

    const renderLanguages = () => {
        const languages = country.languages;

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
            <h3>Country Name: {country.name.common}</h3>
            <h4>Capital(s): {country.capital} </h4>
            {renderLanguages()}

        </>
    );
}

export default Country;
