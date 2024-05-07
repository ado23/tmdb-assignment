import { MediaDetails } from "components/index";
import { BackButton } from "features/index";
import style from "pages/movies/view/details/style.module.scss";
import useMovieDetailsPage from "pages/movies/view/details/useMovieDetailsPage";

const MovieDetailsPage = () => {
  const { selectedMovie } = useMovieDetailsPage();

  return (
    <div className={style["big-container"]}>
      <div className={style["big-container-button"]}>
        <BackButton />
      </div>

      <MediaDetails
        imgUrl={`https://media.themoviedb.org/t/p/w1280${selectedMovie?.backdrop_path}`}
        title={selectedMovie?.title ?? ""}
        rating={selectedMovie?.vote_average ?? 0}
        releaseDate={selectedMovie?.release_date ?? ""}
        overview={selectedMovie?.overview ?? ""}
        originalTitle={selectedMovie?.original_title ?? ""}
        tagline={selectedMovie?.tagline ?? ""}
        voteCount={selectedMovie?.vote_count ?? 0}
      />
    </div>
  );
};

export default MovieDetailsPage;
