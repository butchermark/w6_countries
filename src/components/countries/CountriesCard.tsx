import { Link } from "react-router-dom";
import { CardWrapper } from "../../styling/CardWrapper";
import { Image } from "../../styling/Image";
import { Wrapper } from "../../styling/Wrapper";

const CountriesCard = ({ country, theme }: any) => {
  return (
    <CardWrapper theme={theme}>
      <Wrapper>
        <Link to={`/countries/${country.name.official}`}>
          {country && (
            <Image width="250px" height="150px" src={country.flags.svg} />
          )}
        </Link>
      </Wrapper>
      <Link to={`/countries/${country.name.official}`}>
        <h3>{country.name.common}</h3>
      </Link>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </CardWrapper>
  );
};
export default CountriesCard;
