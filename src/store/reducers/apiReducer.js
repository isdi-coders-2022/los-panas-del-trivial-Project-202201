import actionTypes from "../actions/api/actionTypes";

const apiReducer = (apiStatus, action) => {
  let newApiStatus;

  switch (action.type) {
    case actionTypes.setLoading:
      newApiStatus = {
        ...apiStatus,
        loading: action.mode,
      };
      break;
    case actionTypes.setError:
      newApiStatus = {
        ...apiStatus,
        error: action.mode,
      };
      break;
    default:
      newApiStatus = { ...apiStatus };
  }
  return newApiStatus;
};

export default apiReducer;
