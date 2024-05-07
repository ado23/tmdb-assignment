import { Loader, MediaDetails } from "components/index";
import { BackButton } from "features/index";
import style from "pages/tv-shows/view/details/style.module.scss";
import useTvShowDetailsPage from "pages/tv-shows/view/details/useTvShowDetailsPage";

const TvShowDetailsPage = () => {
  const { selectedTvShow, isLoading } = useTvShowDetailsPage();

  if (isLoading) return <Loader />;

  return (
    <div className={style["big-container"]}>
      <div className={style["big-container-button"]}>
        <BackButton />
      </div>

      <MediaDetails
        imgUrl={`https://media.themoviedb.org/t/p/w1280${selectedTvShow?.backdrop_path}`}
        title={selectedTvShow?.name ?? ""}
        rating={selectedTvShow?.vote_average ?? 0}
        releaseDate={selectedTvShow?.first_air_date ?? ""}
        overview={selectedTvShow?.overview ?? ""}
        originalTitle={selectedTvShow?.original_name ?? ""}
        tagline={selectedTvShow?.tagline ?? ""}
        voteCount={selectedTvShow?.vote_count ?? 0}
      />
    </div>
  );
};

export default TvShowDetailsPage;
