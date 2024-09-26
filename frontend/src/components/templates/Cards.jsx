import React from "react";

const Cards = ({data}) => {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-84 h-84 md:w-96 md:h-96 shadow-xl mt-10 hover:scale-110 hover:cursor-pointer duration-300">
          <figure className="h-[50%] ">
            <img
              src={data.image}
              alt="Shoes"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.name}
              <div className={`badge badge-secondary border-0 ${data.category==="free"?"bg-green-400":"bg-red-500"}`}>{data.category}</div>
            </h2>
            <p>{data.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">$ {data.price}</div>
              <div className="badge badge-outline hover:bg-green-200 hover:text-zinc-900 duration-200 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
