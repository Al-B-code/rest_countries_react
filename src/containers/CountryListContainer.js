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


    return ( 
        <>
        <section className="sectionBoth">
            <section className="countries">
                <CountryList countries={countries}/>
            </section>
            <section className="visitedCountries">
                <VisitedCountryList countries={countries}/>
            </section>
        </section>
        </>
        );
}

export default CountryListContainer;