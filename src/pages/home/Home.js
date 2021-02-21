import React, { useEffect } from "react";
import ForeCast from "./forecast/ForeCast";
import SearchBox from "./search-box/SearchBox";
import { connect } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/user-preferences/user.actions";
import { getForecast } from "../../redux/forecast/forecast.actions";
import { withRouter } from "react-router-dom";

const Home = ({
  forecast,
  userFavorites,
  forecastLoading,
  addToFavorite,
  removeFromFavorite,
  getForecast,
  location,
}) => {
  let defaultCity = {
    Key: 215854,
    LocalizedName: "Tel Aviv",
  };
  let city = location.state ? location.state : defaultCity;

  useEffect(() => {
    getForecast(city);
  }, []);

  return (
    <>
      <SearchBox />
      <ForeCast
        forecast={forecast}
        userFavorites={userFavorites}
        forecastLoading={forecastLoading}
        addToFavorite={addToFavorite}
        removeFromFavorite={removeFromFavorite}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  forecast: state.foreCast.forecast,
  forecastLoading: state.foreCast.loading,
  userFavorites: state.userPref.favoriteCities,
});
const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (cityData) => dispatch(addToFavorite(cityData)),
  removeFromFavorite: (key) => dispatch(removeFromFavorite(key)),
  getForecast: (cityData) => dispatch(getForecast(cityData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
