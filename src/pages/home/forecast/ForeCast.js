import React from "react";
import MyButton from "../../../components/buttons/MyButton";
import { CityTitleContainer } from "./forecast.style";
import SingleDay from "./SingleDay";
import Spinner from "../../../components/spinner/Spinner";
import { CardsContainer, PageContainer } from "../../pagesGlobal.style";

const ForeCast = ({
  forecast,
  userFavorites,
  forecastLoading,
  addToFavorite,
  removeFromFavorite,
}) => {
  let dailyForecasts = forecast ? forecast.DailyForecasts : [];
  let headLineTxt = forecast ? forecast.Headline.Text : "";
  let cityName = forecast ? forecast.LocalizedName : "";
  let key = forecast ? forecast.Key : undefined;

  let city = {
    LocalizedName: cityName,
    Key: key,
  };

  const isFavorite = () => {
    return userFavorites.some((fav) => fav.Key === forecast.Key) ? 1 : 0;
  };
  const addRemoveFavorite = () => {
    isFavorite() ? removeFromFavorite(key) : addToFavorite(city);
  };
  return (
    <Spinner loading={forecastLoading}>
      {forecast && (
        <PageContainer>
          <CityTitleContainer>
            <h2>{cityName}</h2>
            <MyButton
              onClick={() => addRemoveFavorite()}
              isFavorite={isFavorite()}>
              &#9829;
            </MyButton>
          </CityTitleContainer>
          <h3>{headLineTxt}</h3>
          <CardsContainer>
            {dailyForecasts.map((day) => {
              return <SingleDay day={day} key={day.Date} />;
            })}
          </CardsContainer>
        </PageContainer>
      )}
    </Spinner>
  );
};

export default ForeCast;
