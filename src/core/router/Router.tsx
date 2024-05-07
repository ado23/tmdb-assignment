import { FC, Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, Route, Routes } from "react-router-dom";

import { ErrorFallback, Loader } from "components/index";
import { Paths } from "router/paths";
import routes from "router/routes";

const NotFoundPage = lazy(() => import("pages/not-found/NotFoundPage"));

const AppRoutes: FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />

        <Route path="/*">
          {routes.map(({ path, Component, name, ariaLabel }) => (
            <Route key={name} path={path} element={<Component />} aria-label={ariaLabel} />
          ))}
        </Route>
        <Route path="/" element={<Navigate to={Paths.MOVIES} />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default AppRoutes;
