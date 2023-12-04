import Country from "./Country";

const VisitedCountryList = ({countries}) => {

    const countriesMapped = countries 
    ? countries.map((country, index) => <Country key={index} country={country}/>) 
    : "not loaded yet";


    return ( 
        <>
        <h2>Countries</h2>
        {countriesMapped}
        </>
    );
}

export default VisitedCountryList;