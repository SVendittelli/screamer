"use client";

import Logo from "@/components/Logo";
import { convertRuntime } from "@/libs/runtime";
import Image from "next/image";
import { useState } from "react";
import { sampleData } from "./sample-data";

export const dynamic = "force-dynamic";

export default function Demo() {
  const [index, setIndex] = useState(0);
  const movie = sampleData[index];

  const next = () => setIndex((index + 1) % sampleData.length);
  const prev = () =>
    setIndex((index - 1 + sampleData.length) % sampleData.length);

  return (
    <main className="min-h-screen w-screen p-4">
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
      <div id="poster" className="relative w-full aspect-poster">
        <Image src={movie.poster} alt={``} fill className="object-contain" />
      </div>
      <p>
        {movie.title} ({movie.year}) - {movie.rated} - {movie.runtime} (
        {convertRuntime(movie.runtime)})
      </p>
      <p>{movie.genre}</p>
      <p>{movie.plot}</p>
      <p>Director: {movie.director}</p>
      <p>Writers: {movie.writer}</p>
      <p>Actors: {movie.actors}</p>
      {!movie.language.includes("English") && <p>{movie.language}</p>}
      <p>{movie.awards}</p>
      <div>
        {movie.ratings.map((rating) => (
          <p key={rating.source}>
            {rating.source}: {rating.value}
          </p>
        ))}
      </div>
      <p>Box office: {movie.boxOffice}</p>
    </main>
  );
}
