import { useCallback } from "react";

import { useSelectMovies } from "pages/movies/store/moviesSelectors";
import useRouteHelpers from "router/routeHelpers";

const useListMovies = () => {
  const selectedMovies = useSelectMovies();
  const { goToMovieDetails } = useRouteHelpers();

  const handleOnClick = useCallback(
    (id: number | undefined) => goToMovieDetails(String(id)),
    [goToMovieDetails]
  );

  return { selectedMovies, handleOnClick };
};

export default useListMovies;
