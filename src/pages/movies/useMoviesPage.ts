import { useEffect } from "react";

import { useSelectQuery } from "features/media/store/mediaSelectors";
import useAppDispatch from "hooks/useAppDispatch";
import { getMovies, searchMovies } from "pages/movies/services/moviesThunks";

const useMoviesPage = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useSelectQuery();

  useEffect(() => {
    dispatch(searchTerm.length > 3 ? searchMovies({ query: searchTerm }) : getMovies({}));
  }, [dispatch, searchTerm]);
};

export default useMoviesPage;
