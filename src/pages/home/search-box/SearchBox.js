import React from "react";
import AutoComplete from "../../../components/auto-complete/AutoComplete";
import { SearchBoxContainer } from "./searchBox.style";

const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <AutoComplete />
    </SearchBoxContainer>
  );
};

export default SearchBox;
