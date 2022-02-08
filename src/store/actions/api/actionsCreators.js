import actionTypes from "./actionTypes";

export const toggleLoadingAction = (mode) => ({
  type: actionTypes.toggleLoading,
  mode: mode,
});

export const toggleErrorAction = (mode) => ({
  type: actionTypes.toggleError,
  mode: mode,
});
