import { FC } from "react";

import { Search, Typography } from "components/index";
import useSearchMedia from "features/media/search-media/hooks/useSearchMedia";
import style from "features/media/search-media/style.module.scss";

const SearchMedia: FC = () => {
  const { handleDebouncedSearch, searchTerm } = useSearchMedia();

  return (
    <div className={style["search-main-container"]}>
      <div className={style["search-inner-container"]}>
        <div className={style["search-column"]}>
          <Typography variant="title">Welcome !</Typography>
          <Typography variant="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <Search
            id="search-media"
            ariaLabel="search-input"
            defaultValue={searchTerm}
            placeholder="Start typing..."
            handleOnChange={handleDebouncedSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMedia;
