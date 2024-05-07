import { useEffect } from "react";

import { useSelectQuery } from "features/media/store/mediaSelectors";
import useAppDispatch from "hooks/useAppDispatch";
import { getMovies, searchMovies } from "pages/movies/services/moviesThunks";
import { useSelectMoviesLoading } from "pages/movies/store/moviesSelectors";

const useMoviesPage = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useSelectQuery();
  const isLoading = useSelectMoviesLoading();

  useEffect(() => {
    dispatch(searchTerm.length > 3 ? searchMovies({ query: searchTerm }) : getMovies({}));
  }, [dispatch, searchTerm]);

  return { isLoading };
};

export default useMoviesPage;
