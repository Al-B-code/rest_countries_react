import CountryListContainer from './containers/CountryListContainer';
import './App.css';
import './containers/CountryListContainer.css'

function App() {
  return (
    <>
    <h1>List of Countries</h1>
    <CountryListContainer className="CountryListContainer"/>
    </>
  );
}

export default App;
