import { useCallback, useContext } from "react";
import {
  addGameAction,
  loadGamesAction,
  loadQuestionsAction,
  removeGameAction,
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

      const categorySports = 21;
      const categoryAnimals = 27;
      const categoryVideoGames = 15;
      const categoryComputers = 18;
      const categoryGeography = 22;

      const allUrlToFetch = [
        getTrivialUrl(`${categorySports}`, difficulty),
        getTrivialUrl(`${categoryAnimals}`, difficulty),
        getTrivialUrl(`${categoryVideoGames}`, difficulty),
        getTrivialUrl(`${categoryComputers}`, difficulty),
        getTrivialUrl(`${categoryGeography}`, difficulty),
      ];

      async function getAllQuestionsFetch(url) {
        const categoryResponse = await fetch(url);
        return categoryResponse;
      }

      const trivialPromises = allUrlToFetch.map(
        async (urlToFetch) => await getAllQuestionsFetch(urlToFetch)
      );

      const responses = await Promise.all(trivialPromises);

      responses.forEach(async (response) => {
        const results = await response.json();
        results.results.forEach((result) => allQuestions.push(result));
        return allQuestions;
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

  return { loadQuestionsAPI, loadGamesAPI, addGameAPI, deleteGameAPI };
};

export default useAPI;
