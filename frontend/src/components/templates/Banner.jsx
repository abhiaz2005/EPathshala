import React from "react";
import bookBanner from '/BookBAnner.png'

const Banner = () => {
  return (
    <>
      <div>
        <div className="max-w-screen-2xl container mx-auto px-14 md:px-20 flex flex-col md:flex-row my-20">
          <div className="w-full ml-4 md:w-1/2 md:order-1 order-2 ">
            <h1 className="text-3xl font-bold md:text-5xl md:mt-10 leading-9">
              Hello Welcome !! <br />
              Come here for learning new things everyday{" "}
              <span className="text-green-200">
                with a renovate platform. . .
              </span>
            </h1>
            <p className="text-zinc-200 text-xs md:text-md leading-5 mt-3 md:mt-8">
              "Unlock a world of endless reading with our e-library, where
              knowledge and stories are always at your fingertips. No matter
              where you are, dive into a vast collection of e-books spanning
              every genre and topic. From timeless classics to the latest
              releases, our platform brings the library directly to you,
              eliminating the need for shelves and space. Whether you're looking
              to explore new worlds"
            </p>
            <label className="mt-5 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          <button className="btn btn-secondary mt-5">Get started</button>
          </div>
          <div className="w-full my-3 md:w-1/2 order-1">
            <img src={bookBanner} className="w-90 object-cover" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
