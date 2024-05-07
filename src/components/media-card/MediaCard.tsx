import { FC } from "react";

import { Rating, Typography } from "components/index";
import style from "components/media-card/style.module.scss";

type MediaCardProps = {
  name: string;
  poster: string;
  releaseDate: string;
  rating: number;
  handleOnClick?: () => void;
};

const MediaCard: FC<MediaCardProps> = ({ name, poster, rating, releaseDate, handleOnClick }) => (
  <button className={style["card-container"]} onClick={handleOnClick}>
    <img loading="lazy" src={poster} alt={name} className={style["img-container"]} />

    <div className={style["text-container"]}>
      <Rating rating={rating} />
      <div className={style["text-truncate-container"]}>
        <Typography variant="subtitle" truncate={true}>
          {name}
        </Typography>
      </div>
      <Typography variant="text">{releaseDate}</Typography>
    </div>
  </button>
);

export default MediaCard;
