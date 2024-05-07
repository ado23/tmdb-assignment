import { MediaCard, NoResults, Typography } from "components/index";
import { IMAGE_BASE_URL } from "constants/index";
import style from "pages/movies/components/list-movies/style.module.scss";
import useListMovies from "pages/movies/components/list-movies/useListMovies";

const ListMovies = () => {
  const { handleOnClick, selectedMovies } = useListMovies();

  return (
    <>
      <div className={style["text-container"]}>
        <Typography variant="subtitle" type="secondary">
          TOP 10 RATED MOVIES
        </Typography>
      </div>

      <div className={style["container"]}>
        {selectedMovies?.length === 0 ? (
          <NoResults />
        ) : (
          selectedMovies?.map(({ id, title, poster_path, vote_average, release_date }) => (
            <MediaCard
              key={id}
              name={title ?? ""}
              rating={vote_average ?? 0}
              releaseDate={release_date ?? ""}
              handleOnClick={() => handleOnClick(id)}
              poster={`${IMAGE_BASE_URL}/w1280${poster_path}`}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ListMovies;
