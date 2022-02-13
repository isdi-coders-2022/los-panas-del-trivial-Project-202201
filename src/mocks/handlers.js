import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_HEROKU_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "pruebamsw",
          creator: "sdfg",
          difficulty: "easy",
          questions: [],
          id: 3,
        },
        {
          name: "secondGame",
          creator: "ghj",
          difficulty: "easy",
          questions: [],
          id: 2,
        },
      ])
    );
  }),

  rest.get("https://opentdb.com/api.php", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        response_code: 0,
        results: [
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "In golf, what name is given to a hole score of two under par?",
            correct_answer: "Eagle",
            incorrect_answers: ["Birdie", "Bogey", "Albatross"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "Which English football club has the nickname &#039;The Foxes&#039;?",
            correct_answer: "Leicester City",
            incorrect_answers: [
              "Northampton Town",
              "Bradford City",
              "West Bromwich Albion",
            ],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "Which team won the 2015-16 English Premier League?",
            correct_answer: "Leicester City",
            incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "Which country will host the 2020 Summer Olympics?",
            correct_answer: "Japan",
            incorrect_answers: ["China", "Australia", "Germany"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "Which country has hosted the 2018 FIFA World Cup?",
            correct_answer: "Russia",
            incorrect_answers: ["Germany", "United States", "Saudi Arabia"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "Who won the 2015 Formula 1 World Championship?",
            correct_answer: "Lewis Hamilton",
            incorrect_answers: [
              "Nico Rosberg",
              "Sebastian Vettel",
              "Jenson Button",
            ],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "Which driver has been the Formula 1 world champion for a record 7 times?",
            correct_answer: "Michael Schumacher",
            incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"],
          },
          {
            category: "Sports",
            type: "boolean",
            difficulty: "easy",
            question: "Roger Federer is a famous soccer player.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "How many points did LeBron James score in his first NBA game?",
            correct_answer: "25",
            incorrect_answers: ["19", "69", "41"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
            correct_answer: "4",
            incorrect_answers: ["1", "2", "3"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
            correct_answer: "Nico Rosberg",
            incorrect_answers: [
              "Lewis Hamilton",
              "Max Verstappen",
              "Kimi Raikkonen",
            ],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "Which team has won the most Stanley Cups in the NHL?",
            correct_answer: "Montreal Canadians",
            incorrect_answers: [
              "Chicago Blackhawks",
              "Toronto Maple Leafs",
              "Detroit Red Wings",
            ],
          },
          {
            category: "Sports",
            type: "boolean",
            difficulty: "easy",
            question:
              "In Rugby League, performing a &quot;40-20&quot; is punished by a free kick for the opposing team.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "When was the first official international game played?",
            correct_answer: "1872",
            incorrect_answers: ["1880", "1863", "1865"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "Who is often called &quot;the Maestro&quot; in the men&#039;s tennis circuit?",
            correct_answer: "Roger Federer",
            incorrect_answers: ["Bill Tilden", "Boris Becker", "Pete Sampras"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "When was the FC Schalke 04 founded?",
            correct_answer: "1904",
            incorrect_answers: ["1909", "2008", "1999"],
          },
          {
            category: "Sports",
            type: "boolean",
            difficulty: "easy",
            question:
              "There are a total of 20 races in Formula One 2016 season.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "Which year did Jenson Button won his first ever Formula One World Drivers&#039; Championship?",
            correct_answer: "2009",
            incorrect_answers: ["2010", "2007", "2006"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question: "Which country will host the 2022 FIFA World Cup?",
            correct_answer: "Qatar",
            incorrect_answers: ["USA", "Japan", "Switzerland"],
          },
          {
            category: "Sports",
            type: "multiple",
            difficulty: "easy",
            question:
              "Who won the 2017 Formula One World Drivers&#039; Championship?",
            correct_answer: "Lewis Hamilton",
            incorrect_answers: [
              "Sebastian Vettel",
              "Nico Rosberg",
              "Max Verstappen",
            ],
          },
        ],
      })
    );
  }),

  rest.post(`${process.env.REACT_APP_API_HEROKU_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json([
        {
          name: "postPrueba",
          creator: "sdfg",
          difficulty: "easy",
          questions: [],
          id: 3,
        },
      ])
    );
  }),

  rest.patch(`${process.env.REACT_APP_API_HEROKU_URL}3`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),

  rest.delete(`${process.env.REACT_APP_API_HEROKU_URL}3`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
