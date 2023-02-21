import { DropDownSelect } from "./DropDownSelect.styled";

const DropDownSelector = ({ onFilterCountries, theme }: any) => {
  const onFilterChangeHandler = (event: any) => {
    onFilterCountries(event.target.value);
  };

  return (
    <DropDownSelect onChange={onFilterChangeHandler} theme={theme}>
      <option value="">Filter by region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </DropDownSelect>
  );
};

export default DropDownSelector;
