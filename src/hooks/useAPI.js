import { useCallback, useContext } from "react";
import TrivialContext from "../store/contexts/TrivialContext";

const useAPI = () => {
  const getTrivialUrl = (category, difficulty) =>
    `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}`;

  const gamesAPIurl = "https://trivial-provider.herokuapp.com/games";
  const { gamesDispatch, questionDispatch } = useContext(TrivialContext);
};

export default useAPI;
