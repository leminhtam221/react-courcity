import Footer from "components/Clients/Footer";
import Header from "components/Clients/Header";
import ReadyToBegin from "components/Clients/ReadyToBegin";
import React from "react";
import { Route } from "react-router";

const HomeLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <ReadyToBegin />
      <Footer />
    </React.Fragment>
  );
};

function ClientRoute({ Component, ...props }) {
  return (
    <Route {...props}>
      <HomeLayout>
        <Component />
      </HomeLayout>
    </Route>
  );
}

export default ClientRoute;
