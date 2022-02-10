import { rest } from "msw";

export const handlers = [
  rest.get("https://trivial-provider.herokuapp.com/games/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "pruebamsw",
          creator: "sdfg",
          difficulty: "easy",
          questions: [],
          id: 4,
        },
        {
          name: "jhg",
          creator: "ghj",
          difficulty: "easy",
          questions: [],
          id: 7,
        },
      ])
    );
  }),
];
