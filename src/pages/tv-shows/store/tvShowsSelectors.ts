import { useAppSelector } from "src/hooks";

export const useSelectTvShows = () => useAppSelector(({ tvShows: { data } }) => data);
export const useSelectTvShowsLoading = () =>
  useAppSelector(({ tvShows: { isLoading } }) => isLoading);
export const useSelectTvShowDetails = () => useAppSelector(({ tvShows: { selected } }) => selected);
