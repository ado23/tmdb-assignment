import { FC, lazy } from "react";

import { Paths } from "router/paths";

const MoviesPage = lazy(() => import("pages/movies/MoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/movies/view/details/MovieDetailsPage"));
const TvShowsPage = lazy(() => import("pages/tv-shows/TvShowsPage"));
const TvShowDetailsPage = lazy(() => import("pages/tv-shows/view/details/TvShowDetailsPage"));

interface IRoutesArray {
  name: string;
  path: string;
  Component: FC;
  ariaLabel: string;
}

export enum RouteNames {
  MOVIES = "Movies",
  TV_SHOWS = "Tv Shows",
  MOVIE_DETAILS = "Movie Details",
  TV_SHOW_DETAILS = "Tv Show Details"
}

const routes: IRoutesArray[] = [
  {
    name: RouteNames.MOVIES,
    path: Paths.MOVIES,
    Component: MoviesPage,
    ariaLabel: RouteNames.MOVIES
  },
  {
    name: RouteNames.MOVIE_DETAILS,
    path: Paths.VIEW_MOVIE,
    Component: MovieDetailsPage,
    ariaLabel: RouteNames.MOVIE_DETAILS
  },
  {
    name: RouteNames.TV_SHOWS,
    path: Paths.TV_SHOWS,
    Component: TvShowsPage,
    ariaLabel: RouteNames.TV_SHOWS
  },
  {
    name: RouteNames.TV_SHOW_DETAILS,
    path: Paths.VIEW_TV_SHOW,
    Component: TvShowDetailsPage,
    ariaLabel: RouteNames.TV_SHOW_DETAILS
  }
];

export default routes;
