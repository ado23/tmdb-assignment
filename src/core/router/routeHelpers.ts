import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Paths } from "router/paths";

const useRouteHelpers = () => {
  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), [navigate]);
  const goToMovies = useCallback(() => navigate(`/${Paths.MOVIES}`), [navigate]);
  const goToTvShows = useCallback(() => navigate(`/${Paths.TV_SHOWS}`), [navigate]);
  const goToMoviesWithQuery = useCallback(
    (query: string) => navigate(`/${Paths.MOVIES}${query}`),
    [navigate]
  );
  const goToTvShowsWithQuery = useCallback(
    (query: string) => navigate(`/${Paths.TV_SHOWS}${query}`),
    [navigate]
  );
  const goToMovieDetails = useCallback(
    (movieID: string) => navigate(`/${Paths.VIEW_MOVIE.replace(":movieID", movieID)}`),
    [navigate]
  );
  const goToTvShowDetails = useCallback(
    (tvShowID: string) => navigate(`/${Paths.VIEW_TV_SHOW.replace(":tvShowID", tvShowID)}`),
    [navigate]
  );

  return {
    goBack,
    goToMovies,
    goToTvShows,
    goToMovieDetails,
    goToTvShowDetails,
    goToMoviesWithQuery,
    goToTvShowsWithQuery
  };
};

export default useRouteHelpers;
