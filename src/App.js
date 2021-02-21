import React from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/nav-bar/NavBar";
import { GlobalStyles } from "./utils/style/theme/GlobalStyles";
import { lightTheme, darkTheme } from "./utils/style/theme/theme";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";
import NotFound from "./pages/404/NotFound";
import MyAlert from "./components/my-alert/MyAlert";
import { connect } from "react-redux";
import { toggleTheme } from "./redux/user-preferences/user.actions";
import { themeStyle } from "./utils/enum";

const App = ({ theme, toggleTheme }) => {
  const themeToggler = () => {
    theme === themeStyle.LIGHT
      ? toggleTheme(themeStyle.DARK)
      : toggleTheme(themeStyle.LIGHT);
  };

  return (
    <ThemeProvider theme={theme === themeStyle.LIGHT ? lightTheme : darkTheme}>
      <GlobalStyles />
      <NavBar theme={theme} themeToggler={themeToggler} />
      <MyAlert />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/favorite" render={() => <Favorite />} />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => ({
  theme: state.userPref.theme,
});
const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (themeStyle) => dispatch(toggleTheme(themeStyle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
