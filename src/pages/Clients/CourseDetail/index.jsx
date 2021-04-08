import useImportScript from "hooks/import-custom-script";
import React from "react";
import Banner from "./components/banner";
import MainContainer from "./components/main-container";

function CourseDetailPage() {
  useImportScript();
  return (
    <React.Fragment>
      <Banner />
      <MainContainer />
    </React.Fragment>
  );
}

export default CourseDetailPage;
