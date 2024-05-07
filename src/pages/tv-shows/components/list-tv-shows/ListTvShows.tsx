import { MediaCard } from "components/index";
import style from "pages/tv-shows/components/list-tv-shows/style.module.scss";
import useListTvShows from "pages/tv-shows/components/list-tv-shows/useListTvShows";

const ListTvShows = () => {
  const { handleOnClick, selectedTvShows } = useListTvShows();

  return (
    <>
      <div className={style["text-container"]}>
        <h2> Top 10 rated TV shows </h2>
      </div>

      <div className={style["container"]}>
        {selectedTvShows?.map(({ id, name, poster_path, vote_average, first_air_date }) => (
          <MediaCard
            key={id}
            name={name ?? ""}
            poster={`https://media.themoviedb.org/t/p/w1280${poster_path}`}
            rating={vote_average ?? 0}
            releaseDate={first_air_date ?? ""}
            handleOnClick={() => handleOnClick(id)}
          />
        ))}
      </div>
    </>
  );
};

export default ListTvShows;
