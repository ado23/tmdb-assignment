import { Loader } from "components/index";
import { SearchMedia, MediaNavigation } from "features/index";
import ListMovies from "pages/movies/components/list-movies/ListMovies";
import useMoviesPage from "pages/movies/useMoviesPage";

const MoviesPage = () => {
  const { isLoading } = useMoviesPage();

  if (isLoading) return <Loader />;

  return (
    <>
      <SearchMedia />
      <MediaNavigation />
      <ListMovies />
    </>
  );
};

export default MoviesPage;
