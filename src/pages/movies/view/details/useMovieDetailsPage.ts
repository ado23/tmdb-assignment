import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAppDispatch from "hooks/useAppDispatch";
import { getMovieDetails } from "pages/movies/services/moviesThunks";
import { useSelectMovieDetails, useSelectMoviesLoading } from "pages/movies/store/moviesSelectors";

const useMovieDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { movieID } = useParams();
  const selectedMovie = useSelectMovieDetails();
  const isLoading = useSelectMoviesLoading();

  useEffect(() => {
    dispatch(getMovieDetails({ movieId: Number(movieID) }));
  }, [dispatch, movieID]);

  return { selectedMovie, isLoading };
};

export default useMovieDetailsPage;
