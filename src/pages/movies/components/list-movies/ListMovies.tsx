import { Card } from "components/index";
import style from "pages/movies/components/list-movies/style.module.scss";
import useListMovies from "pages/movies/components/list-movies/useListMovies";

const ListMovies = () => {
  const { handleOnClick, selectedMovies } = useListMovies();

  return (
    <>
      <div className={style["text-container"]}>
        <h2> Top 10 rated movies </h2>
      </div>

      <div className={style["container"]}>
        {selectedMovies?.map(({ id, title, poster_path, vote_average, release_date }) => (
          <Card
            key={id}
            name={title ?? ""}
            poster={`https://media.themoviedb.org/t/p/w1280${poster_path}`}
            rating={vote_average}
            releaseDate={release_date ?? ""}
            handleOnClick={() => handleOnClick(id)}
          />
        ))}
      </div>
    </>
  );
};

export default ListMovies;
