import React from "react";
import Navbar from "./templates/Navbar";
import Course from "./templates/Course";
import Footer from "./templates/Footer";

const Courses = () => {


  return (
    <>
      <div className="w-full">
        <Navbar />
        <Course />
        <Footer />
      </div>
    </>
  );
};

export default Courses;
