import { FC, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Loader } from "components/index";
import { Paths } from "router/paths";
import routes from "router/routes";

const NotFoundPage = lazy(() => import("pages/not-found/NotFoundPage"));

const AppRoutes: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
      <Route path="/*">
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
      </Route>
      <Route path="/" element={<Navigate to={Paths.MOVIES} />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
