import Footer from "components/Clients/Footer";
import Header from "components/Clients/Header";
import Loading from "components/Clients/Loading";
import ReadyToBegin from "components/Clients/ReadyToBegin";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientRoute from "route/client";
import clientRoute from "route/client/route";
const NotFound = lazy(() => import("components/Clients/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {clientRoute.map((item, index) => (
            <ClientRoute
              key={index}
              path={item.path}
              exact={item.exact}
              Component={item.component}
            />
          ))}

          <Route path='*'>
            <Header />
            <NotFound />
            <ReadyToBegin />
            <Footer />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
