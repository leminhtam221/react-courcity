import Loading from "components/Clients/Loading";
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

          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
