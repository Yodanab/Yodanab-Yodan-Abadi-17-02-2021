import React from "react";
import {
  Img,
  ImgTemperature,
  PhraseTitle,
  SingleCardContainer,
} from "../../pagesGlobal.style";

const SingleDay = ({ day }) => {
  return (
    <SingleCardContainer>
      <h2>
        {new Date(day.Date).toLocaleString("default", { weekday: "long" })}
      </h2>
      <PhraseTitle>{day.Day.IconPhrase}</PhraseTitle>
      <ImgTemperature>
        <Img
          src={`https://www.accuweather.com/images/weathericons/${day.Day.Icon}.svg`}
        />
        <h1>{day.Temperature.Maximum.Value}°</h1>
      </ImgTemperature>
    </SingleCardContainer>
  );
};

export default SingleDay;
