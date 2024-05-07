import { useEffect } from "react";

import { useSelectQuery } from "features/media/store/mediaSelectors";
import useAppDispatch from "hooks/useAppDispatch";
import { getTvShows, searchTvShows } from "pages/tv-shows/services/tvShowsThunks";

const useTvShowsPage = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useSelectQuery();

  useEffect(() => {
    dispatch(searchTerm.length > 3 ? searchTvShows({ query: searchTerm }) : getTvShows({}));
  }, [dispatch, searchTerm]);
};

export default useTvShowsPage;
