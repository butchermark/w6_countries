import { SearchInp } from "./StyledFlexWrapper";

const SearchInput = ({ onSearchCountries, theme }: any) => {
  const onSearchChangeHandler = (event: any) => {
    onSearchCountries(event.target.value);
  };

  return (
    <SearchInp
      placeholder="Search for a country..."
      onChange={onSearchChangeHandler}
      theme={theme}
    />
  );
};

export default SearchInput;
