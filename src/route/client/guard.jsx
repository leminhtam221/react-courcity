import Footer from "components/Clients/Footer";
import Header from "components/Clients/Header";
import ReadyToBegin from "components/Clients/ReadyToBegin";
import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router";

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

function GuardRoute({ Component, ...props }) {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  if (!user.id) {
    history.push({ pathname: "/sign-in" });
  }
  return (
    <React.Fragment>
      {user.id && (
        <Route {...props}>
          <HomeLayout>
            <Component />
          </HomeLayout>
        </Route>
      )}
    </React.Fragment>
  );
}

export default GuardRoute;
