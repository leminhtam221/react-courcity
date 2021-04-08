import { lazy } from "react";

const HomePage = lazy(() => import("pages/Clients/HomePage"));
const CoursesPage = lazy(() => import("pages/Clients/CoursesPage"));
const CourseDetail = lazy(() => import("pages/Clients/CourseDetail"));

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
  {
    path: "/course/:id",
    exact: false,
    component: CourseDetail,
  },
];

export default clientRoute;
