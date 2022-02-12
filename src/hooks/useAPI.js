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

      const responseSports = await fetch(
        getTrivialUrl(`${categorySports}`, difficulty)
      );
      const questionsSports = await responseSports.json();
      const questionsListSports = questionsSports.results;
      allQuestions.push(...questionsListSports);

      const responseAnimals = await fetch(
        getTrivialUrl(`${categoryAnimals}`, difficulty)
      );
      const questionsAnimals = await responseAnimals.json();
      const questionsListAnimals = questionsAnimals.results;
      allQuestions.push(...questionsListAnimals);

      const responseVideogames = await fetch(
        getTrivialUrl(`${categoryVideoGames}`, difficulty)
      );
      const questionsVideogames = await responseVideogames.json();
      const questionsListVideogames = questionsVideogames.results;
      allQuestions.push(...questionsListVideogames);

      const responseComputers = await fetch(
        getTrivialUrl(`${categoryComputers}`, difficulty)
      );
      const questionsComputers = await responseComputers.json();
      const questionsListComputers = questionsComputers.results;
      allQuestions.push(...questionsListComputers);

      const responseGeography = await fetch(
        getTrivialUrl(`${categoryGeography}`, difficulty)
      );
      const questionsGeography = await responseGeography.json();
      const questionsListGeography = questionsGeography.results;
      allQuestions.push(...questionsListGeography);

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
