import { FC } from "react";

import { Icon, Typography } from "components/index";
import style from "components/rating/style.module.scss";
import { roundToOneDecimal } from "utilities/index";

type RatingProps = {
  rating: number;
};

const Rating: FC<RatingProps> = ({ rating }) => {
  const roundedRating = rating ? roundToOneDecimal(rating) : 0;

  return (
    <div className={style["rating"]}>
      <Icon name="rating" color="gold" w="13px" />
      <Typography variant="label">{roundedRating} / 10</Typography>
    </div>
  );
};

export default Rating;
