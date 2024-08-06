import Image from "next/image";
import React from "react";
import MovieCard from "@/components/movieCard";
import NavBar from "@/components/navBar";

function page() {
  const movies = [
    {
      large: true,
      href: "/movie/watch-the-fall-guy-free-108544",
      title: "The Fall Guy",
      src: "/sdragon.jpg",
      alt: "House of the Dragon",
      movieTitle: "House of the Dragon",
      year: "2024",
      duration: "120m",
    },
    {
      large: false,
      href: "/movie/watch-the-dark-knight-free-108545",
      title: "The Dark Knight",
      src: "/darkknight.jpg",
      alt: "The Dark Knight",
      movieTitle: "The Dark Knight",
      year: "2008",
      duration: "152m",
    },
    {
      large: true,
      href: "/movie/watch-inception-free-108546",
      title: "Inception",
      src: "/inception.jpg",
      alt: "Inception",
      movieTitle: "Inception",
      year: "2010",
      duration: "148m",
    },
    // Add more dummy movies as needed
  ];

  return (
    <main className="bg-storm-dust bg-opacity-15 pb-7 min-h-screen text-center max-w-[1500px] mx-auto">
      <NavBar />

      <section className="px-10 mt-7">
        <h2 className="text-left text-copper font-semibold mb-5 text-xl">
          New Releases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              large={true}
              href={movie.href}
              title={movie.title}
              src={movie.src}
              alt={movie.alt}
              movieTitle={movie.movieTitle}
              year={movie.year}
              duration={movie.duration}
            />
          ))}
        </div>
      </section>

      {/* Body */}
    </main>
  );
}

export default page;
