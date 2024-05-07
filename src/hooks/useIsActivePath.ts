import { useCallback } from "react";
import { matchPath, useLocation } from "react-router-dom";

import { Paths } from "router/paths";

const useCurrentPath = () => {
  const { pathname } = useLocation();

  const isActivePath = useCallback(
    (path: `${Paths}`) => (matchPath({ path }, pathname) ? true : false),
    [pathname]
  );

  return { isActivePath };
};

export default useCurrentPath;
