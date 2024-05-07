import { SearchMedia, MediaNavigation } from "features/index";
import ListMovies from "pages/movies/components/list-movies/ListMovies";
import useMoviesPage from "pages/movies/useMoviesPage";

const MoviesPage = () => {
  useMoviesPage();

  return (
    <>
      <SearchMedia />
      <MediaNavigation />
      <ListMovies />
    </>
  );
};

export default MoviesPage;
