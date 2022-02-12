import { useCallback, useContext } from "react";
import {
  addGameAction,
  loadGamesAction,
  loadQuestionsAction,
  removeGameAction,
  modifyGameNamesAction,
} from "../store/actions/trivial/actionsCreators";
import TrivialContext from "../store/contexts/TrivialContext";

const useAPI = () => {
  const getTrivialUrl = (category, difficulty) =>
    `${process.env.REACT_APP_API_TRIVIAL_URL}category=${category}&difficulty=${difficulty}`;

  const gamesAPIurl = process.env.REACT_APP_API_HEROKU_URL;

  const { allQuestionsDispatch, gamesDispatch } = useContext(TrivialContext);

  const loadQuestionsAPI = useCallback(
    async (difficulty) => {
      let allQuestions = [];

      let categories = [21, 27, 15, 18, 22];

      const allUrlToFetch = categories.map((category) =>
        getTrivialUrl(category, difficulty)
      );

      const getCategoryQuestionsFetch = async (url) => {
        const categoryResponse = await fetch(url);
        return await categoryResponse.json();
      };

      const trivialPromises = allUrlToFetch.map((urlToFetch) =>
        getCategoryQuestionsFetch(urlToFetch)
      );

      const responses = await Promise.all(trivialPromises);

      responses.forEach((response) => {
        response.results.forEach((result) => allQuestions.push(result));
      });

      allQuestionsDispatch(loadQuestionsAction(allQuestions));
    },
    [allQuestionsDispatch]
  );

  const loadGamesAPI = useCallback(async () => {
    const response = await fetch(gamesAPIurl);
    const gamesList = await response.json();
    gamesDispatch(loadGamesAction(gamesList));
  }, [gamesAPIurl, gamesDispatch]);

  const addGameAPI = async (game) => {
    const response = await fetch(gamesAPIurl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(game),
    });
    if (response.ok) {
      const newGame = await response.json();
      gamesDispatch(addGameAction(newGame));
    }
  };

  const deleteGameAPI = async (id) => {
    const response = await fetch(`${gamesAPIurl}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      gamesDispatch(removeGameAction(id));
    }
  };

  const updateGameAPI = async (id, gameNames) => {
    const response = await fetch(`${gamesAPIurl}${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(gameNames),
    });
    if (response.ok) {
      gamesDispatch(modifyGameNamesAction(gameNames, id));
    }
  };

  return {
    loadQuestionsAPI,
    loadGamesAPI,
    addGameAPI,
    deleteGameAPI,
    updateGameAPI,
  };
};

export default useAPI;
