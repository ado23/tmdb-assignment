import { FC } from "react";

import style from "components/media-details/style.module.scss";

type MediaDetailsProps = {
  imgUrl: string;
  title: string;
  rating: number;
  releaseDate: string;
  overview: string;
  originalTitle: string;
  tagline: string;
  voteCount: number;
};

const MediaDetails: FC<MediaDetailsProps> = ({
  imgUrl,
  title,
  rating,
  releaseDate,
  overview,
  originalTitle,
  tagline,
  voteCount
}) => (
  <div className={style["media-details-container"]}>
    <div className={style["media-details-img-container"]}>
      <img src={imgUrl} alt={title} />
    </div>

    <div className={style["media-details-text-container"]}>
      <h1>{title}</h1>

      <p>Original Title: {originalTitle} </p>
      <p>Rating: {rating} </p>
      <p>Release Date: {releaseDate} </p>
      <p>Vote Count: {voteCount} </p>
      <p>Tagline: {tagline} </p>
      <p>Overview: {overview}</p>
    </div>
  </div>
);

export default MediaDetails;
