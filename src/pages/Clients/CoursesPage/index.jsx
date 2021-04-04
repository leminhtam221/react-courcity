import { importCustomScript } from "helper/customScript";
import React from "react";
import Banner from "./components/banner";
import MainContainer from "./components/main-container";

function CoursesPage() {
  React.useEffect(() => {
    importCustomScript();
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <MainContainer />
    </React.Fragment>
  );
}

export default CoursesPage;
