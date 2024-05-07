import { ChangeEvent, useCallback } from "react";

import useRouteMethods from "features/media/search-media/hooks/useRouteMethods";
import { useSelectQuery } from "features/media/store/mediaSelectors";
import { useDebounce } from "hooks/index";
import { Paths } from "router/paths";

const useSearchMedia = () => {
  const { searchTerm } = useSelectQuery();
  const { handleMoviesRoute, handleTvShowsRoute, handleSearchTermChange, isActivePath } =
    useRouteMethods();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (isActivePath(Paths.MOVIES)) handleMoviesRoute();
      if (isActivePath(Paths.TV_SHOWS)) handleTvShowsRoute();

      handleSearchTermChange(e.target.value);
    },
    [handleMoviesRoute, handleSearchTermChange, handleTvShowsRoute, isActivePath]
  );

  const handleDebouncedSearch = useDebounce(handleChange, 1000);

  return { handleDebouncedSearch, searchTerm };
};

export default useSearchMedia;
