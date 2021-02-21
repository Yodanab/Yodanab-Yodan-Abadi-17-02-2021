const INITIAL_STATE = {
  view: false,
  content: null,
  style: null,
};

const myAlertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ALERT_MESSAGE":
      return {
        view: true,
        content: payload.content,
        style: payload.style,
      };
    case "REMOVE_ALERT_MESSAGE":
      return { view: false, content: null, style: null };
    default:
      return state;
  }
};

export default myAlertReducer;
