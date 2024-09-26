import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Course = () => {
 
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const bookData = await axios.get("http://localhost:4001/book");
      setBook(bookData.data) ;
    } catch (error) {
      console.log("Error: ",error) ;
    }
  };
  useEffect(() => {
    getBook();
  }, [])
  
  const navigate = useNavigate() ;
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-14 md:px-20 mt-28 z-10 mb-14">
        <div className="mb-10">
          <h1 className="text-4xl md:text-8xl">Unlock Thousands of Courses to Boost Your Skills and <span className="text-green-200">Advance Your Career Results 	
          &#128366; &#128366; &#128366;</span></h1>
          <p className="text-xl mt-5">
          Unlock a world of learning with our diverse range of courses designed to help you gain new skills and advance your career. Whether you're looking to enhance your professional expertise or explore a new hobby, our platform offers courses across various subjects taught by industry experts. With flexible, self-paced learning options, you can study anytime, anywhere. Start your journey today and take the next step in personal and professional growth.
          </p>
          <button onClick={()=>navigate(-1)} className="mt-5 bg-zinc-500 text-white px-4 py-2 rounded-xl hover:bg-zinc-600 duration-300">Back</button>
        </div>
        <div className="flex  justify-start flex-wrap gap-5  2xl:mx-10">
          {book.map((d, i) => {
            return <Cards data={d} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
