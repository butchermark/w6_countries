import axios from "axios";
import { Image } from "../../styling/Image";
import { BodyWrapper } from "../../styling/CountriesDataBodyWrapper";
import "./Country.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../shared/BackButton";
import { ICountry, IName } from "../shared/ICountry.interface";

const Country = () => {
  const [countryData, setCountryData] = useState<ICountry>();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const { country } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((result: any) => {
          if (result.data !== undefined) {
            const faszom: ICountry = {
              name: result.data[0].name,
              cca3: result.data[0].cca3,
              tld: result.data[0].tld,
              subregion: result.data[0].subregion,
              population: result.data[0].population,
              region: result.data[0].region,
              capital: result.data[0].capital,
              flag: result.data[0].flags.svg,
            };
            setCountryData(faszom);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);

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
      <header>
        <p>Where in the world?</p>
        <button onClick={toggleTheme}>Dark Mode</button>
      </header>
      <div className="under-header">
        <BackButton />
      </div>

      <div className="country-div">
        <div>
          <Image width="500px" height="300px" src={countryData?.flag} />
        </div>
        <div className="details-upper-div">
          <div className="country-title">
            <p>{countryData?.name.official}</p>
          </div>
          <div className="details-lower-div">
            <div className="lower-div-1">
              <p>Population: {countryData?.population}</p>
              <p>Top Level Domain: {countryData?.tld[0]}</p>
              <p>Shortened name: {countryData?.cca3}</p>
            </div>
            <div className="lower-div-2">
              <p>Subregion: {countryData?.subregion}</p>
              <p>Region: {countryData?.region}</p>
              <p>Capital: {countryData?.capital}</p>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};
export default Country;
