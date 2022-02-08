import actionTypes from "./actionTypes";

export const setLoadingAction = (mode) => ({
  type: actionTypes.setLoading,
  mode: mode,
});

export const setErrorAction = (mode) => ({
  type: actionTypes.setError,
  mode: mode,
});
