import MainPage from "./pages/MainPage";
import CreateGamePage from "./pages/CreateGamePage";
import { Navigate, Route, Routes } from "react-router-dom";
import GameListPage from "./pages/GameListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<MainPage />} />
        <Route path="/games-list" element={<GameListPage />} />
        <Route path="/game">
          <Route index element={"Placeholder for element <GamePage />"} />
          <Route path="new" element={<CreateGamePage />} />
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
