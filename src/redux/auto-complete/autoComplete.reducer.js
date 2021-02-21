const INITIAL_STATE = {
  loading: false,
  suggestions: [],
  error: null,
};

const autoCompleteReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_SUGGESTIONS_START":
      return { ...state, loading: true };
    case "GET_SUGGESTIONS_SUCCESS":
      return { ...state, loading: false, suggestions: payload };
    case "GET_SUGGESTIONS_FAILED":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default autoCompleteReducer;
