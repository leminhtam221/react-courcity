import { lazy } from "react";

const HomePage = lazy(() => import("pages/Clients/HomePage"));
const CoursesPage = lazy(() => import("pages/Clients/CoursesPage"));
const CourseDetail = lazy(() => import("pages/Clients/CourseDetail"));
const SignInPage = lazy(() => import("pages/Clients/SignIn"));
const SignUpPage = lazy(() => import("pages/Clients/SignUp"));

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
  {
    path: "/sign-in",
    exact: false,
    component: SignInPage,
  },
  {
    path: "/sign-up",
    exact: false,
    component: SignUpPage,
  },
];

export default clientRoute;
