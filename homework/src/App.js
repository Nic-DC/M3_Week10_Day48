import logo from "./netflix/assets/netflix_logo.png";
import avatar from "./netflix/assets/avatar.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // link the boostrap.css
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent logo={logo} avatar={avatar} />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<TVShows />} path="/tv-shows" />
          <Route element={<MovieDetails />} path="/movie-details/:movieId" />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
