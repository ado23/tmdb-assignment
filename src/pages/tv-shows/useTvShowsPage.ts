import { useEffect } from "react";

import { useSelectQuery } from "features/media/store/mediaSelectors";
import useAppDispatch from "hooks/useAppDispatch";
import { getTvShows, searchTvShows } from "pages/tv-shows/services/tvShowsThunks";
import { useSelectTvShowsLoading } from "pages/tv-shows/store/tvShowsSelectors";

const useTvShowsPage = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useSelectQuery();
  const isLoading = useSelectTvShowsLoading();

  useEffect(() => {
    dispatch(searchTerm.length > 3 ? searchTvShows({ query: searchTerm }) : getTvShows({}));
  }, [dispatch, searchTerm]);

  return { isLoading };
};

export default useTvShowsPage;
