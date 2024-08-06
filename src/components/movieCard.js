import React from "react";
import { FaPlay as Play } from "react-icons/fa";

function MovieCard({
  large,
  href,
  title,
  src,
  alt,
  movieTitle,
  year,
  duration,
}) {
  const sizeClasses = large ? "w-64 h-64 text-sm" : "w-40 h-40 text-xs";
  const imageClasses = large ? "w-64 h-[22rem]" : "w-40 h-32";
  const playIconSize = large ? 25 : 25;

  return (
    <a
      href={href}
      title={title}
      className={`relative block w-fit h-96 ${sizeClasses}`}
    >
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className={`block rounded-md ${imageClasses}`}
        />
        <div className="absolute inset-0 rounded-md flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-copper w-14 h-14 pl-1 rounded-full flex justify-center items-center">
            <Play color="white" size={playIconSize} />
          </div>
        </div>
      </div>

      <p className="truncate text-left my-1 font-semibold">{movieTitle}</p>
      <div className="flex items-center gap-2">
        <span className="text-xs bg-carrot-orange px-1 py-[.1rem] font-bold rounded-sm">
          HD
        </span>
        <span className="text-gray-500">{year}</span>{" "}
        <span className="bg-gray-500 w-[5px] h-[5px] rounded-full"></span>{" "}
        <span className="text-gray-500">{duration}</span>
      </div>
    </a>
  );
}

export default MovieCard;
