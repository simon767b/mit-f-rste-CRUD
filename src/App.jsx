import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NavBar from "./components/NavBar.jsx";
import UserDetailPage from "./pages/UserDetailPage.jsx";
import UserUpdatePage from "./pages/UserUpdatePage.jsx";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/users/:id/update" element={<UserUpdatePage />} />
      </Routes>
    </main>
  );
}

export default App;
