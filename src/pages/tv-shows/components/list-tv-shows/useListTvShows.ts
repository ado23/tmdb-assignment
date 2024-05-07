import { useSelectTvShows } from "pages/tv-shows/store/tvShowsSelectors";
import useRouteHelpers from "router/routeHelpers";

const useListTvShows = () => {
  const selectedTvShows = useSelectTvShows();
  const { goToTvShowDetails } = useRouteHelpers();
  const handleOnClick = (id: number | undefined) => goToTvShowDetails(String(id));

  return { handleOnClick, selectedTvShows };
};

export default useListTvShows;
