import axios from "axios";
import { useEffect, useState } from "react";
import { BodyWrapper } from "../../styling/CountriesDataBodyWrapper";
import DropDownSelector from "../tools/DropDownSelector";
import "./CountriesData.css";
import { Grid } from "@material-ui/core";
import CountriesCard from "../countries/CountriesCard";
import SearchInput from "../tools/SearchInput";
import { ICountry, IName } from "../shared/ICountry.interface";

const CountriesData = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchedCountries, setSearchedCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredountries] = useState<ICountry[]>([]);
  const [filter, setFilter] = useState("Europe");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [isSearch, setIsSearch] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    setIsSearch(false);
    setIsFilter(false);
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get("https://restcountries.com/v3.1/all")
        .then((result) => {
          setCountries(result.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://restcountries.com/v3.1/region/${filter}`
        );
        setFilteredountries(response);
        !isSearch && setSearchedCountries(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [filter]);

  const filterCountriesHandler = (value: any) => {
    setIsFilter(true);
    setFilter(value);
  };

  const searchCountriesHandler = (value: any) => {
    if (value !== "") {
      setIsSearch(true);
      if (!isFilter) {
        let copyOfCountries = countries;
        setSearchedCountries(
          copyOfCountries.filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(value.toLowerCase().trim())
          )
        );
      }
      if (isFilter) {
        let copyOfCountries = filteredCountries;
        setSearchedCountries(
          copyOfCountries.filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(value.toLowerCase().trim())
          )
        );
      }
    } else {
      setIsSearch(false);
      setSearchedCountries(countries);
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <BodyWrapper theme={theme}>
      <div className="main-div">
        <header>
          <p>Where in the world?</p>
          <button onClick={toggleTheme}>Dark Mode</button>
        </header>
        <div className="under-header">
          <SearchInput
            onSearchCountries={searchCountriesHandler}
            theme={theme}
          />
          <DropDownSelector
            onFilterCountries={filterCountriesHandler}
            theme={theme}
          />
        </div>
        {loading && <div>Loading...</div>}
        {!loading && (
          <Grid container spacing={10} justifyContent="center">
            {isSearch || isFilter
              ? searchedCountries.map((country, index) => (
                  <Grid
                    key={country.name.official}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    <CountriesCard
                      country={country}
                      theme={theme}
                      key={index}
                    ></CountriesCard>
                  </Grid>
                ))
              : countries.map((country, index) => (
                  <Grid
                    key={country.name.official}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    <CountriesCard
                      country={country}
                      theme={theme}
                      key={index}
                    ></CountriesCard>
                  </Grid>
                ))}
          </Grid>
        )}
      </div>
    </BodyWrapper>
  );
};
export default CountriesData;
