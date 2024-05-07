import { FC } from "react";

import style from "components/error-fallback/style.module.scss";
import { Button } from "components/index";

const ErrorFallback: FC<{ error: Error; resetErrorBoundary: () => void }> = ({
  error,
  resetErrorBoundary
}) => (
  <div className={style["error-container"]}>
    <h1>Something went wrong.</h1>
    <p>{error.message}</p>
    <Button
      id="error-boundary-button"
      text="Try again"
      onClick={resetErrorBoundary}
      variant="primary"
      ariaLabel="Go back"
    />
  </div>
);

export default ErrorFallback;
