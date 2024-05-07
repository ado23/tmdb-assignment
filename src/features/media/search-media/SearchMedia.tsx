import { FC } from "react";

import { Search } from "components/index";
import useSearchMedia from "features/media/search-media/hooks/useSearchMedia";
import style from "features/media/search-media/style.module.scss";

const SearchMedia: FC = () => {
  const { handleDebouncedSearch, searchTerm } = useSearchMedia();

  return (
    <div className={style["search-main-container"]}>
      <div className={style["search-inner-container"]}>
        <div className={style["search-column"]}>
          <h1>Welcome !</h1>
          <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
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
