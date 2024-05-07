import { useCallback } from "react";

import useGetQuery from "features/media/media-navigation/hooks/useGetQuery";
import useNavigationButtons from "features/media/media-navigation/hooks/useNavigationButtons";
import useRouteHelpers from "router/routeHelpers";

const useMediaNavigation = () => {
  const { query } = useGetQuery();
  const { goToMoviesWithQuery, goToTvShowsWithQuery } = useRouteHelpers();
  const { moviesButtonVariant, tvShowsButtonVariant } = useNavigationButtons();

  const goToMovies = useCallback(() => goToMoviesWithQuery(query), [goToMoviesWithQuery, query]);
  const goToTvShows = useCallback(() => goToTvShowsWithQuery(query), [goToTvShowsWithQuery, query]);

  return { goToMovies, goToTvShows, moviesButtonVariant, tvShowsButtonVariant };
};

export default useMediaNavigation;
