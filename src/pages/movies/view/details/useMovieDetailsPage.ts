import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAppDispatch from "hooks/useAppDispatch";
import { getMovieDetails } from "pages/movies/services/moviesThunks";
import { useSelectMovieDetails } from "pages/movies/store/moviesSelectors";

const useMovieDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { movieID } = useParams();
  const selectedMovie = useSelectMovieDetails();

  useEffect(() => {
    dispatch(getMovieDetails({ movieId: Number(movieID) }));
  }, [dispatch, movieID]);

  return { selectedMovie };
};

export default useMovieDetailsPage;
