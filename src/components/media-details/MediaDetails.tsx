import { FC } from "react";

import { Icon, Rating, Typography } from "components/index";
import style from "components/media-details/style.module.scss";

type MediaDetailsProps = {
  title: string;
  imgUrl: string;
  rating: number;
  tagline: string;
  overview: string;
  voteCount: number;
  releaseDate: string;
  originalTitle: string;
};

const MediaDetails: FC<MediaDetailsProps> = ({
  title,
  rating,
  imgUrl,
  tagline,
  overview,
  voteCount,
  releaseDate,
  originalTitle
}) => (
  <div className={style["media-details-container"]}>
    <div className={style["media-details-img-container"]}>
      <img src={imgUrl} alt={title} />
    </div>

    <div className={style["media-details-text-container"]}>
      <Typography variant="title">{title}</Typography>
      <Typography variant="subtitle" type="tertiary">
        Original Title: {originalTitle}
      </Typography>
      <Rating rating={rating} />

      <div className={style["flex-center-gap"]}>
        <Icon name="calendar" color="white" w="15px" h="15px" />
        <Typography variant="label">{releaseDate}</Typography>
      </div>
      <div className={style["flex-center-gap"]}>
        <Icon name="community" color="white" w="20px" h="20px" />
        <Typography variant="label">{voteCount.toLocaleString()}</Typography>
      </div>
      <Typography variant="text" type="tertiary" style={{ fontStyle: "italic" }}>
        {tagline}
      </Typography>
      <Typography variant="subtitle">Overview:</Typography>
      <Typography variant="text">{overview}</Typography>
    </div>
  </div>
);

export default MediaDetails;
