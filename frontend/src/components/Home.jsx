import React from "react";
import Navbar from "./templates/Navbar";
import Banner from "./templates/Banner";
import Footer from "./templates/Footer";
import Freebook from "./templates/Freebook";
const Home = () => {
  return (
    <div className='w-full' >
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
};

export default Home;
