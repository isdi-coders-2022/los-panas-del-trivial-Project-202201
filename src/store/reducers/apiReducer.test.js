import apiReducer from "./apiReducer";

describe("Given a apiReducer reducer", () => {
  describe("When it receives true and setLoading action", () => {
    test("Then it should return loading: true", () => {
      const apiStatus = { loading: true };
      const action = {
        type: "set-loading",
        mode: true,
      };
      const expectedOutput = { loading: true };

      const newStatus = apiReducer(apiStatus, action);

      expect(newStatus).toEqual(expectedOutput);
    });
  });

  describe("When it receives true and setError action", () => {
    test("Then it should return error: true", () => {
      const apiStatus = { error: true };
      const action = {
        type: "set-error",
        mode: true,
      };
      const expectedOutput = { error: true };

      const newStatus = apiReducer(apiStatus, action);

      expect(newStatus).toEqual(expectedOutput);
    });
  });
});
