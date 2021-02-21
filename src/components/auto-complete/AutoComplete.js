import React, { useEffect, useState } from "react";
import InputField from "../input-field/InputField";
import { Suggestion, SuggestionContainer } from "./autoComplete.style";
import { connect } from "react-redux";
import { getSuggestions } from "../../redux/auto-complete/autoComplete.actions";
import { getForecast } from "../../redux/forecast/forecast.actions";

const AutoComplete = ({
  suggestions,
  getSuggestions,
  getForecast,
  loading,
}) => {
  const [autoComplete, setAutoComplete] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });
  const [querySent, setQuerySent] = useState("");

  let {
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    userInput,
  } = autoComplete;

  useEffect(() => {
    setAutoComplete({ ...autoComplete, filteredSuggestions: suggestions });
  }, [suggestions]);

  const handleChange = (e) => {
    const { value } = e.target;

    setAutoComplete({ ...autoComplete, userInput: value });
    if (value.length === 3 && querySent !== value) {
      getSuggestions(value);
      setQuerySent(value);
    }

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(({ LocalizedName }) =>
      LocalizedName.toLowerCase().includes(value.toLowerCase())
    );

    setAutoComplete({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: value,
    });
  };
  const onClick = (e) => {
    if (!filteredSuggestions[activeSuggestion]) {
      return;
    }
    let data = {
      Key: filteredSuggestions[activeSuggestion].Key,
      LocalizedName: filteredSuggestions[activeSuggestion].LocalizedName,
    };
    getForecast(data);
    setAutoComplete({
      ...autoComplete,
      activeSuggestion: 0,
      showSuggestions: false,
      userInput: filteredSuggestions[activeSuggestion].LocalizedName,
    });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //enter
      if (!filteredSuggestions[activeSuggestion]) {
        return;
      }
      let data = {
        Key: filteredSuggestions[activeSuggestion].Key,
        LocalizedName: filteredSuggestions[activeSuggestion].LocalizedName,
      };
      getForecast(data);
      setAutoComplete({
        ...autoComplete,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion].LocalizedName,
      });
    } else if (e.keyCode === 38) {
      //up arrow
      if (activeSuggestion === 0) {
        return;
      }

      setAutoComplete({
        ...autoComplete,
        activeSuggestion: activeSuggestion - 1,
      });
    } else if (e.keyCode === 40) {
      //down arrow
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setAutoComplete({
        ...autoComplete,
        activeSuggestion: activeSuggestion + 1,
      });
    } else if (e.keyCode === 39) {
      //right arrow
      setAutoComplete({
        ...autoComplete,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
  };

  const hoverSuggestion = (index) => {
    setAutoComplete({ ...autoComplete, activeSuggestion: index });
  };

  let suggestionsListComponent = () => {
    if (loading) {
      return <Suggestion>please wait...</Suggestion>;
    }
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        return filteredSuggestions.map(({ LocalizedName }, index) => {
          let active = index === activeSuggestion ? true : false;

          return (
            <Suggestion
              active={active}
              key={index}
              onClick={onClick}
              onMouseEnter={() => hoverSuggestion(index)}>
              {LocalizedName}
            </Suggestion>
          );
        });
      } else if (userInput.length > 2) {
        return <Suggestion>No suggestions </Suggestion>;
      }
    }
  };

  return (
    <>
      <InputField
        type="text"
        handleChange={handleChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      <SuggestionContainer>{suggestionsListComponent()}</SuggestionContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  suggestions: state.autoComplete.suggestions,
  loading: state.autoComplete.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getSuggestions: (userInput) => dispatch(getSuggestions(userInput)),
  getForecast: (cityData) => dispatch(getForecast(cityData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
