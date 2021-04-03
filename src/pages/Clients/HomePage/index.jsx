import React from "react";
import AchiveGoal from "./components/achive-goal";
import Banner from "./components/banner";
import Category from "./components/category";
import Client from "./components/client";
import LearningPath from "./components/learning-path";
import Testimonial from "./components/testimonial";
import TopCourses from "./components/top-courses";

function HomePage() {
  return (
    <div>
      <Banner />
      <Category />
      <TopCourses />
      <AchiveGoal />
      <LearningPath />
      <Testimonial />
      <Client />
    </div>
  );
}

export default HomePage;
