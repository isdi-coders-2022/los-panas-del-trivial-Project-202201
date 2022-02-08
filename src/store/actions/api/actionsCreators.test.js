import { setLoadingAction } from "./actionsCreators";

describe("Given a setLoadingAction function", () => {
  describe("When it receives an mode true", () => {
    test("Then it should return an action with type 'set-loading' and mode true", () => {
      const mode = true;
      const expectedAction = {
        type: "set-loading",
        mode,
      };

      const action = setLoadingAction(mode);

      expect(action).toEqual(expectedAction);
    });
  });
});
