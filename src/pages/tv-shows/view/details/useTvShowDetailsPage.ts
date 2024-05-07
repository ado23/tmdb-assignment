import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAppDispatch from "hooks/useAppDispatch";
import { getTvShowDetails } from "pages/tv-shows/services/tvShowsThunks";
import {
  useSelectTvShowDetails,
  useSelectTvShowsLoading
} from "pages/tv-shows/store/tvShowsSelectors";

const useTvShowDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { tvShowID } = useParams();
  const selectedTvShow = useSelectTvShowDetails();
  const isLoading = useSelectTvShowsLoading();

  useEffect(() => {
    dispatch(getTvShowDetails({ seriesId: Number(tvShowID) }));
  }, [dispatch, tvShowID]);

  return { selectedTvShow, isLoading };
};

export default useTvShowDetailsPage;
