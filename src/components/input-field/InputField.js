import React from "react";
import { Input, InputGroup, Label } from "./input.style";

const InputField = ({ handleChange, ...restData }) => {
  return (
    <InputGroup>
      <Label>Search</Label>
      <Input
        placeholder={"Start Typing"}
        onChange={handleChange}
        {...restData}
      />
    </InputGroup>
  );
};

export default InputField;
