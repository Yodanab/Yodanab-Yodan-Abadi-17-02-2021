import React from "react";
import { NotFoundImg, NotFoundPage } from "./notFound.style";

const NotFound = () => {
  return (
    <NotFoundPage>
      <NotFoundImg src={"https://i.imgur.com/DWO5Hzg.png"} />
      <h2>Ops...Wrong page</h2>
    </NotFoundPage>
  );
};

export default NotFound;
