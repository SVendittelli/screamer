"use client";

import Logo from "@/components/Logo";
import { convertRuntime } from "@/libs/runtime";
import Image from "next/image";
import { FC, useState } from "react";
import { Rating, sampleData } from "./sample-data";

export const dynamic = "force-dynamic";

type Props = {
  rating: Rating;
};

const Rating: FC<Props> = ({ rating }) => {
  const title =
    rating.source === "Internet Movie Database" ? "IMDb" : rating.source;

  return (
    <div className="flex flex-col items-center rounded-lg bg-black px-2">
      <div className="font-bold">{title}</div>
      <div>{rating.value}</div>
    </div>
  );
};

export default function Demo() {
  const [index, setIndex] = useState(0);
  const movie = sampleData[index];

  const genres = movie.genre.split(", ");

  const next = () => setIndex((index + 1) % sampleData.length);
  const prev = () =>
    setIndex((index - 1 + sampleData.length) % sampleData.length);

  return (
    <div className="min-h-screen w-screen p-4">
      <header className="flex gap-6 pb-2">
        <Logo />
        <button
          className="text-white bg-neutral-950 enabled:hover:bg-neutral-700 disabled:opacity-75 no-underline font-bold py-2 px-4 rounded-full"
          onClick={prev}
        >
          Prev
        </button>
        <button
          className="text-white bg-neutral-950 enabled:hover:bg-neutral-700 disabled:opacity-75 no-underline font-bold py-2 px-4 rounded-full"
          onClick={next}
        >
          Next
        </button>
      </header>
      <main>
        <div id="poster" className="relative w-full aspect-poster max-w-md">
          <Image src={movie.poster} alt={``} fill className="object-contain" />
        </div>
        <article className="prose prose-invert prose-neutral flex flex-col gap-2">
          <div id="details">
            <h1 className="mt-2 mb-0">
              {movie.title} ({movie.year})
            </h1>
            <div className="flex gap-2 align-baseline">
              <Image
                className="m-0"
                src={`/BBFC/${movie.rated}.svg`}
                width={32}
                height={32}
                alt={`${movie.rated} rating`}
              />
              <div className="font-bold text-2xl text-white">
                {convertRuntime(movie.runtime)}
              </div>
            </div>
          </div>
          <div id="genres" className="flex gap-2">
            {genres.map((genre) => (
              <div key={genre} className="rounded-lg bg-black px-2">
                {genre}
              </div>
            ))}
          </div>
          <div id="plot">{movie.plot}</div>
          {!movie.language.includes("English") && <div>{movie.language}</div>}
          <div id="awards">{movie.awards}</div>
          <div id="ratings" className="flex justify-between gap-2">
            {movie.ratings.map((rating) => (
              <Rating key={rating.source} rating={rating} />
            ))}
          </div>
          <div id="moreDetails">
            {/* TODO: conditionally pluralise labels */}
            <div>Director: {movie.director}</div>
            <div>Writers: {movie.writer}</div>
            <div>Stars: {movie.actors}</div>
            <div>Box office: {movie.boxOffice}</div>
          </div>
        </article>
      </main>
    </div>
  );
}
