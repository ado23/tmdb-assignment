import { Button } from "components/index";
import useMediaNavigation from "features/media/media-navigation/hooks/useMediaNavigation";
import style from "features/media/media-navigation/style.module.scss";

const MediaNavigation = () => {
  const { goToMovies, goToTvShows, moviesButtonVariant, tvShowsButtonVariant } =
    useMediaNavigation();

  return (
    <div className={style["btn-group"]}>
      <Button
        id="media-navigation-movies-button"
        size="md"
        text="Movies"
        ariaLabel="Movies"
        onClick={goToMovies}
        variant={moviesButtonVariant}
      />
      <Button
        id="media-navigation-tvShows-button"
        size="md"
        text="TV Shows"
        ariaLabel="TV Shows"
        onClick={goToTvShows}
        variant={tvShowsButtonVariant}
      />
    </div>
  );
};

export default MediaNavigation;
