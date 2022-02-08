import { setErrorAction, setLoadingAction } from "./actionsCreators";

describe("Given a setLoadingAction function", () => {
  describe("When it receives an mode true", () => {
    test("Then it should return an action with type 'set-loading' and mode true", () => {
      const mode = true;
      const expectedAction = {
        type: "set-loading",
        mode: mode,
      };

      const action = setLoadingAction(mode);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a setErrorAction function", () => {
  describe("When it receives an mode false", () => {
    test("Then it should return an action with type 'set-error' and mode false", () => {
      const mode = false;
      const expectedAction = {
        type: "set-error",
        mode: mode,
      };

      const action = setErrorAction(mode);

      expect(action).toEqual(expectedAction);
    });
  });
});
