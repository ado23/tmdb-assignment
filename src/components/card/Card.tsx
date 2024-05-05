import { FC } from "react";

import style from "components/card/style.module.scss";
import Icon from "components/icon/Icon";

type TCard = {
  name: string;
  rating: number | undefined;
  releaseDate: string;
  poster: string;
};

const Card: FC<TCard> = ({ name, poster, rating, releaseDate }) => (
  <div className={style["card-container"]}>
    <img loading="lazy" src={poster} alt={name} className={style["img-container"]} />

    <div className={style["text-container"]}>
      <div className={style["rating"]}>
        <Icon name="rating" color="gold" w="13px" />
        {rating ? Math.round(rating * 10) / 10 : 0} / 10
      </div>

      <p>{name}</p>
      <p>{releaseDate}</p>
    </div>
  </div>
);

export default Card;
