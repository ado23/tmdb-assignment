import { Loader } from "components/index";
import { SearchMedia, MediaNavigation } from "features/index";
import ListTvShows from "pages/tv-shows/components/list-tv-shows/ListTvShows";
import useTvShowsPage from "pages/tv-shows/useTvShowsPage";

const TvShowsPage = () => {
  const { isLoading } = useTvShowsPage();

  if (isLoading) return <Loader />;

  return (
    <>
      <SearchMedia />
      <MediaNavigation />
      <ListTvShows />
    </>
  );
};

export default TvShowsPage;
