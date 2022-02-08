import MainPage from "./pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<MainPage />} />
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
