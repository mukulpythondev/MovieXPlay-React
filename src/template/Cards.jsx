import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ cardData,title }) => {
  return (
    <div className="flex px-20 w-full relative rounded-md   bg-customblack  gap-14 flex-wrap ">
      {cardData.map((card, index) => (
        <Link to={`/${card.media_type || title}/details/${card.id}`}
          key={index}
          className="h-[45vh] relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-105 duration-150 w-[15%] "
        >
          <img
            className="h-[70%] w-full rounded-md object-cover"
            src={`https://image.tmdb.org/t/p/original${
              card.poster_path || card.backdrop_path || card.profile_path
            }`}
            alt=""
          />
          <h1 className="text-zinc-300 mt-1 p-2 text-lg  font-semibold uppercase">
            {card.title ||
              card.name ||
              card.original_name ||
              card.original_title}
          </h1>
          { card.vote_average &&  <div className="text-white bg-red-600 opacity-90 absolute bottom-[40%] right-[-10%]   rounded-full" >
            <p className="text-sm font-semibold px-2 py-3 " > {(card.vote_average * 10).toFixed() }% </p>
          </div>  } 
        </Link>
      ))}
    </div>
  );
};

export default Cards;
