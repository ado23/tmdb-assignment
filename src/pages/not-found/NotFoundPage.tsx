import { Typography } from "components/index";
import { BackButton } from "features/index";
import style from "pages/not-found/style.module.scss";

const NotFoundPage = () => (
  <div className={style["not-found-container"]}>
    <Typography variant="title" type="secondary">
      404 Page Not Found
    </Typography>
    <BackButton />
  </div>
);

export default NotFoundPage;
