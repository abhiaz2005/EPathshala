import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "../../utils/axios.js"

const Freebook = () => {
  

  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const res = await axios.get("/book");
      setBook(res.data.filter((data) => data.category === "free"));
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-14 md:px-20 my-20">
      <div>
        <h1 className="text-2xl font-semibold">Explore free books</h1>
        <p className="mt-3 text-sm md:text-lg">
          Get access to a vast collection of free books! Explore genres,
          discover new favorites, and enjoy unlimited reading without spending a
          dime. Start your reading journey today with our free e-book selection
          !
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {book.map((d, i) => {
            return <Cards data={d} key={d._id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
