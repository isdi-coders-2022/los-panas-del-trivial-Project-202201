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
});
