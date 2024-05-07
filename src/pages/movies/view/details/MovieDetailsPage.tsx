import { Loader, MediaDetails } from "components/index";
import { IMAGE_BASE_URL, VIDEO_BASE_URL } from "constants/index";
import { BackButton } from "features/index";
import style from "pages/movies/view/details/style.module.scss";
import useMovieDetailsPage from "pages/movies/view/details/useMovieDetailsPage";

const MovieDetailsPage = () => {
  const { selectedMovie, isLoading } = useMovieDetailsPage();
  const imgUrl = `${IMAGE_BASE_URL}/w1280${selectedMovie?.backdrop_path}`;
  const videoUrl = selectedMovie?.video ? `${VIDEO_BASE_URL}${selectedMovie?.video}` : null;

  if (isLoading) return <Loader />;

  return (
    <div className={style["big-container"]}>
      <div className={style["big-container-button"]}>
        <BackButton />
      </div>

      <MediaDetails
        imgUrl={imgUrl}
        videoUrl={videoUrl}
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
