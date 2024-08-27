"use client";
import React, { useRef } from "react";
import NavBar from "@/components/navBar";
import VideoJS from "@/components/video";
import Image from "next/image";
import { LuThumbsDown, LuThumbsUp, LuVideo } from "react-icons/lu";
import Comment  from "@/components/comment";
 
function Movie({ params }) {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://www.tutorialspoint.com/videos/sample480.mp4",
        type: "video/mp4",
      },
    ],
  };

  const playerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("Video Player is waiting");
    });
    player.on("dispose", () => {
      videojs.log("Video player will dispose");
    });
  };

  return (
    <main className="pb-4">
      <NavBar />
      <div className="flex items-center gap-2 font-sm px-10 mt-5">
        <span className="font-semibold">Home</span>
        <span className="bg-gray-500 w-[6px] h-[5px] rounded-full"></span>
        <span className="font-semibold">Movie</span>
        <span className="bg-gray-500 w-[6px] h-[5px] rounded-full"></span>
        <span className="">Bad Boys: Ride or Die</span>
      </div>

      {/* Video Component */}
      {/* <VideoJS options={videoJsOptions} onReady={playerReady} /> */}

      {/* Info */}
      <div className="font-semibold mx-10 bg-copper text-white rounded-sm px-2 py-3 text-sm mt-4 mb-2">
        <p>
          🍿 Enjoy yourself and switch streaming servers if needed for a better
          experience.
        </p>
      </div>

      <video
        src="/rfx.mp4"
        width="100%"
        className=" focus:outline-none mt-5"
        controls
      />

      <section className="flex px-10 mt-10 justify-between w-full gap-10">
        <div className="w-fit flex flex-col gap-2">
          <Image src={"/inception.jpg"} width={180} height={70} />
          <p className="flex items-center text-sm py-[.4rem] bg-gray-100 gap-3 justify-center">
            <LuThumbsUp color="green" /> <span>Like</span>
          </p>
          <p className="flex items-center text-sm py-[.4rem] bg-gray-100 gap-3 justify-center">
            <LuThumbsDown color="red" /> <span>Dislike</span>
          </p>
        </div>

        <div className="">
          <h2 className="text-3xl font-bold mb-4">Bad Boys: Ride or Die</h2>
          <div className="flex justify-start items-center space-x-4 mb-4">
            <p className="flex items-center space-x-2 px-2 py-1 border border-black rounded">
              <LuVideo className="text-xl" />
              <span>Trailer</span>
            </p>
            <p className="bg-carrot-orange text-cod-gray px-2 py-1 border-black rounded">
              HD
            </p>
            <p>
              IMDB Rating: <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </p>
          </div>
          <p className="mb-2">
            After their late former Captain is framed, Lowrey and Burnett try to
            clear his name, only to end up on the run themselves.
          </p>
          <p className="mb-2">
            <b>Released:</b> 2024-06-05
          </p>
          <p className="mb-2">
            <b>Genre:</b> Action, Crime, Thriller
          </p>
          <p className="mb-2">
            <b>Casts:</b> Eric Dane, Martin Lawrence, Derek Russo, Jacob Scipio,
            Jay DeVon Johnson
          </p>
          <p className="mb-2">
            <b>Duration:</b> 115 min
          </p>
          <p className="mb-2">
            <b>Country:</b> United States of America
          </p>
          <p>
            <b>Production:</b> Westbrook Studios, Columbia Pictures, Don
            Simpson/Jerry Bruckheimer Films
          </p>
        </div>
      </section>

      <Comment/>
    </main>
  );
}

export default Movie;
