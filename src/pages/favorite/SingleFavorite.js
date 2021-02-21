import React from "react";
import { withRouter } from "react-router-dom";
import {
  SingleCardContainer,
  PhraseTitle,
  ImgTemperature,
  Img,
} from "../pagesGlobal.style";

const SingleFavorite = ({ data, history }) => {
  return (
    <SingleCardContainer
      favorite
      onClick={() =>
        history.push({
          pathname: "/",
          state: { Key: data.Key, LocalizedName: data.LocalizedName },
        })
      }>
      <h2>{data.LocalizedName}</h2>
      <PhraseTitle>{data.WeatherText}</PhraseTitle>
      <ImgTemperature>
        <Img
          src={`https://www.accuweather.com/images/weathericons/${data.WeatherIcon}.svg`}
        />
        <h1>{data.Temperature.Metric.Value}°</h1>
      </ImgTemperature>
    </SingleCardContainer>
  );
};

export default withRouter(SingleFavorite);
