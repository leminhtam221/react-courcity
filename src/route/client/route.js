import { lazy } from "react";

const HomePage = lazy(() => import("pages/Clients/HomePage"));
const CoursesPage = lazy(() => import("pages/Clients/CoursesPage"));

const clientRoute = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/courses",
    exact: false,
    component: CoursesPage,
  },
];

export default clientRoute;
