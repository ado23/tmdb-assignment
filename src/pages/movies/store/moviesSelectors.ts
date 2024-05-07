import { useAppSelector } from "src/hooks";

export const useSelectMovies = () => useAppSelector(({ movies: { data } }) => data);
export const useSelectMoviesLoading = () =>
  useAppSelector(({ movies: { isLoading } }) => isLoading);
export const useSelectMovieDetails = () => useAppSelector(({ movies: { selected } }) => selected);
