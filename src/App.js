import Footer from "components/Clients/Footer";
import Header from "components/Clients/Header";
import Loading from "components/Clients/Loading";
import ReadyToBegin from "components/Clients/ReadyToBegin";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const HomePage = lazy(() => import("./pages/Clients/HomePage"));
const CoursesPage = lazy(() => import("./pages/Clients/CoursesPage"));
const NotFound = lazy(() => import("./components/Clients/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/courses' component={CoursesPage} />

          <Route component={NotFound} />
        </Switch>

        <ReadyToBegin />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
