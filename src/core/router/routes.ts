import { FC, lazy } from "react";

import { Paths } from "router/paths";

const MoviesPage = lazy(() => import("pages/movies/MoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/movie-details/MovieDetailsPage"));
const TvShowsPage = lazy(() => import("pages/tv-shows/TvShowsPage"));
const TvShowDetailsPage = lazy(() => import("pages/tv-show-details/TvShowDetailsPage"));

interface IRoutesArray {
  name: string;
  path: string;
  Component: FC;
}

const routes: IRoutesArray[] = [
  { name: "Movies", path: Paths.MOVIES, Component: MoviesPage },
  { name: "Movie Details", path: Paths.VIEW_MOVIE, Component: MovieDetailsPage },
  { name: "Tv Shows", path: Paths.TV_SHOWS, Component: TvShowsPage },
  { name: "Tv Show Details", path: Paths.VIEW_TV_SHOW, Component: TvShowDetailsPage }
];

export default routes;
