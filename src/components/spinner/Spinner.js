import React from "react";
import { OneDivSpinner } from "./spinner.style";

const Spinner = ({ loading, children }) => {
  return loading ? <OneDivSpinner /> : children;
};

export default Spinner;
