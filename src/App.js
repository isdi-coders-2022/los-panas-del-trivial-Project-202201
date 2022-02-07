import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <p>Hello</p>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={"Placeholder for element <HomePage />"} />
        <Route
          path="/games-list"
          element={"Placeholder for element <GamesListPage />"}
        />
        <Route path="/game">
          <Route index element={"Placeholder for element <GamePage />"} />
          <Route
            path="new"
            element={"Placeholder for element <NewGamePage />"}
          />
          <Route
            path="edit/:id"
            element={"Placeholder for element <EditGamePage />"}
          />
        </Route>
        <Route path="*" element={"Placeholder for element <NotFoundPage />"} />
      </Routes>
    </>
  );
}

export default App;
