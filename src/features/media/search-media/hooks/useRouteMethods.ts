import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { useSelectQuery } from "features/media/store/mediaSelectors";
import { setSearchTerm } from "features/media/store/mediaSlice";
import { useAppDispatch, useIsActivePath } from "hooks/index";
import { getMovies, searchMovies } from "pages/movies/services/moviesThunks";
import { getTvShows, searchTvShows } from "pages/tv-shows/services/tvShowsThunks";

const useRouteMethods = () => {
  const dispatch = useAppDispatch();
  const [, setSearchParams] = useSearchParams();
  const { searchTerm } = useSelectQuery();
  const { isActivePath } = useIsActivePath();

  const handleMoviesRoute = useCallback(
    () =>
      searchTerm.length > 3
        ? dispatch(searchMovies({ query: searchTerm }))
        : dispatch(getMovies({})),
    [dispatch, searchTerm]
  );

  const handleTvShowsRoute = useCallback(
    () =>
      searchTerm.length > 3
        ? dispatch(searchTvShows({ query: searchTerm }))
        : dispatch(getTvShows({})),
    [dispatch, searchTerm]
  );

  const handleSearchTermChange = useCallback(
    (searchValue: string) => {
      const searchTermParam = searchValue === "" ? undefined : { searchTerm: searchValue };

      setSearchParams(searchTermParam);
      dispatch(setSearchTerm(searchValue));
    },
    [dispatch, setSearchParams]
  );

  return { handleMoviesRoute, handleTvShowsRoute, handleSearchTermChange, isActivePath };
};

export default useRouteMethods;
