import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Countries from "./Components/Countries";
import Search from "./Components/Search";
const url = "https://restcountries.com/v3.1/all";
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const[filteredCountries, setFilteredCountries]=useState(countries);
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const onSubmit=(data)=> {
   
    const filterCountries=countries.filter(country=>country.name.common.toLowerCase().includes(data.toLowerCase()));
    setFilteredCountries(filterCountries);
  }

  return (
    <>
    <Search onSubmit={onSubmit}/>
      {isLoading ? <h2>Loading</h2> : <p className="text-2xl font-bold">Country app</p>}
      
      {error ? <h2>{error.message}</h2> : <h2>No error</h2>}
      {countries && <Countries countries={filteredCountries} />}
    </>
  );
}

export default App;
