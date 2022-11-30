// import logo from "../netflix/assets/netflix_logo.png";
// import avatar from "../netflix/assets/avatar.png";

import NavbarComponent from "../components/NavbarComponent";
import GenreComponent from "../components/GenreComponent";
// import GalleryComponent from "./components/GalleryComponent";
import TrendingNowComponent from "../components/TrendingNowComponent";
import WatchLaterComponent from "../components/WatchLaterComponent";
import NewReleasesComponent from "../components/NewReleasesComponent";
// import FooterComponent from "../components/FooterComponent";
// import DrowpdownAvatar from "./components/DrowpdownAvatar";
// import Test from "./components/Test.jsx";

const HomePage = () => {
  return (
    <div>
      {/* <NavbarComponent logo={logo} avatar={avatar} /> */}
      <GenreComponent /> <TrendingNowComponent title="Trending Now" classes="movie-cover img-fluid rendered-image" />
      <WatchLaterComponent title="Watch Later" classes="movie-cover img-fluid rendered-image" />
      <NewReleasesComponent title="New Releases" classes="movie-cover img-fluid rendered-image" />
      {/* <FooterComponent /> */}
    </div>
  );
};
export default HomePage;
