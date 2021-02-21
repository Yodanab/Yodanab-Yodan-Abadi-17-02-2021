import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CardsContainer, PageContainer } from "../pagesGlobal.style";
import SingleFavorite from "./SingleFavorite";
import { getFavoritesCurrent } from "../../redux/favorite/favorite.actions";
import Spinner from "../../components/spinner/Spinner";

const Favorite = ({
  favoriteWeather,
  userFavorites,
  getFavoritesCurrent,
  favoriteLoading,
}) => {
  useEffect(() => {
    if (userFavorites.length > 0) {
      getFavoritesCurrent(userFavorites);
    }
  }, []);

  return (
    <PageContainer>
      <h2>Your Favorite Places</h2>
      <Spinner loading={favoriteLoading}>
        <CardsContainer>
          {userFavorites.length === 0 ? (
            <h3>No favorite places yet, What are you waiting for?</h3>
          ) : (
            favoriteWeather.map((fav) => {
              return <SingleFavorite data={fav} key={fav.Key} />;
            })
          )}
        </CardsContainer>
      </Spinner>
    </PageContainer>
  );
};

const mapStateToProps = (state) => ({
  favoriteWeather: state.favorite.favorites,
  userFavorites: state.userPref.favoriteCities,
  favoriteLoading: state.favorite.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoritesCurrent: (userFavorite) =>
    dispatch(getFavoritesCurrent(userFavorite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
