import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAppDispatch from "hooks/useAppDispatch";
import { getTvShowDetails } from "pages/tv-shows/services/tvShowsThunks";
import { useSelectTvShowDetails } from "pages/tv-shows/store/tvShowsSelectors";

const useTvShowDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { tvShowID } = useParams();
  const selectedTvShow = useSelectTvShowDetails();

  useEffect(() => {
    dispatch(getTvShowDetails({ seriesId: Number(tvShowID) }));
  }, [dispatch, tvShowID]);

  return { selectedTvShow };
};

export default useTvShowDetailsPage;
