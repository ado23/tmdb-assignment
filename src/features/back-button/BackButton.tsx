import { Button } from "components/index";
import useRouteHelpers from "router/routeHelpers";

const BackButton = () => {
  const { goBack } = useRouteHelpers();

  return (
    <Button
      id="app-go-back-button"
      variant="ghost"
      onClick={goBack}
      text="&#x2190; Back"
      ariaLabel="app-go-back-button"
    />
  );
};

export default BackButton;
