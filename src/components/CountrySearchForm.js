import { useState } from "react";

const CountrySearchForm = ({ onSearch}) => {
    const[searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };
    
    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                Search by Countries List by Name:
                <input type="text" value={searchTerm} onChange={handleSearchChange} />
            </label>
            <button type="submit">Search</button>
        </form>
    );
}

export default CountrySearchForm;