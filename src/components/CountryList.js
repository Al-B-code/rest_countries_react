import Country from "./Country";

const CountryList = ({countries}) => {



    

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
 
export default CountryList;


// const countryInfo = countries ? countries.map((country, index) => <Country key={index} country={country}></Country> ) : <p>loading countries</p>
    // console.log(countries)