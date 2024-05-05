import { Card } from "components/index";
import { useSelectMovies } from "pages/movies/store/movies-selectors";
import style from "pages/movies/style.module.scss";

const MoviesPage = () => {
  const selectedMovies = useSelectMovies();

  return (
    <div className={style.container}>
      {selectedMovies?.map(({ id, title, poster_path, vote_average, release_date }) => (
        <Card
          key={id}
          name={title ?? ""}
          poster={`https://media.themoviedb.org/t/p/w300${poster_path}`}
          rating={vote_average}
          releaseDate={release_date ?? ""}
        />
      ))}
    </div>
  );
};

export default MoviesPage;
