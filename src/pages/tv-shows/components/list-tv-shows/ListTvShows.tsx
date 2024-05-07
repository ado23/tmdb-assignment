import { MediaCard, NoResults, Typography } from "components/index";
import { IMAGE_BASE_URL } from "constants/index";
import style from "pages/tv-shows/components/list-tv-shows/style.module.scss";
import useListTvShows from "pages/tv-shows/components/list-tv-shows/useListTvShows";

const ListTvShows = () => {
  const { handleOnClick, selectedTvShows } = useListTvShows();

  return (
    <>
      <div className={style["text-container"]}>
        <Typography variant="subtitle" type="secondary">
          TOP 10 RATED TV SHOWS
        </Typography>
      </div>

      <div className={style["container"]}>
        {selectedTvShows?.length === 0 ? (
          <NoResults />
        ) : (
          selectedTvShows?.map(({ id, name, poster_path, vote_average, first_air_date }) => (
            <MediaCard
              key={id}
              name={name ?? ""}
              rating={vote_average ?? 0}
              releaseDate={first_air_date ?? ""}
              handleOnClick={() => handleOnClick(id)}
              poster={`${IMAGE_BASE_URL}/w1280${poster_path}`}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ListTvShows;
