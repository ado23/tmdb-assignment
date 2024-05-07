import { FC } from "react";

import style from "components/card/style.module.scss";
import Icon from "components/icon/Icon";

type TCard = {
  name: string;
  rating: number | undefined;
  releaseDate: string;
  poster: string;
  handleOnClick?: () => void;
};

const Card: FC<TCard> = ({ name, poster, rating, releaseDate, handleOnClick }) => (
  <button className={style["card-container"]} onClick={handleOnClick}>
    <img loading="lazy" src={poster} alt={name} className={style["img-container"]} />

    <div className={style["text-container"]}>
      <div className={style["rating"]}>
        <Icon name="rating" color="gold" w="13px" />
        {rating ? Math.round(rating * 10) / 10 : 0} / 10
      </div>

      <p>{name}</p>
      <p>{releaseDate}</p>
    </div>
  </button>
);

export default Card;
