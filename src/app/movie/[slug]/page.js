"use client";
import React, { useRef } from "react";
import NavBar from "@/components/navBar";
import VideoJS from "@/components/video";

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
    <main>
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
      <div className="font-semibold mx-10 bg-copper text-white rounded-sm px-2 py-2 text-sm mt-4 mb-2">
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
    </main>
  );
}

export default Movie;
