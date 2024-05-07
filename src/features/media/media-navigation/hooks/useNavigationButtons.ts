import { ButtonVariant } from "components/index";
import { useIsActivePath } from "hooks/index";
import { Paths } from "router/paths";

const useNavigationButtons = (): {
  moviesButtonVariant: ButtonVariant;
  tvShowsButtonVariant: ButtonVariant;
} => {
  const { isActivePath } = useIsActivePath();

  const moviesButtonVariant = isActivePath(Paths.MOVIES) ? "primary" : "secondary";
  const tvShowsButtonVariant = isActivePath(Paths.TV_SHOWS) ? "primary" : "secondary";

  return { moviesButtonVariant, tvShowsButtonVariant };
};

export default useNavigationButtons;
