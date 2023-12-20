"use client";

import Image from "next/image";
import { FC, useState } from "react";
import Button from "@/components/Button";
import { convertRuntime } from "@/libs/runtime";
import { type Rating, sampleData } from "./sample-data";

type Props = {
  rating: Rating;
};

const RatingComponent: FC<Props> = ({ rating }) => {
  const title =
    rating.source === "Internet Movie Database" ? "IMDb" : rating.source;

  return (
    <div className="flex flex-col items-center rounded-lg bg-black px-2">
      <div className="font-bold">{title}</div>
      <div>{rating.value}</div>
    </div>
  );
};

export default function DemoPage() {
  const [index, setIndex] = useState(0);
  const movie = sampleData[index];

  const genres = movie!.genre.split(", ");

  const next = () => setIndex((index + 1) % sampleData.length);
  const prev = () =>
    setIndex((index - 1 + sampleData.length) % sampleData.length);

  return (
    <div className="min-h-full w-full p-4">
      <main>
        <div id="poster" className="relative aspect-poster w-full max-w-md">
          <Image src={movie!.poster} alt={``} fill className="object-contain" />
        </div>
        <article className="prose prose-neutral prose-invert flex flex-col gap-2">
          <div id="details">
            <h1 className="mb-0 mt-2">{`${movie!.title} (${movie!.year})`}</h1>
            <div className="flex gap-2 align-baseline">
              <Image
                className="m-0"
                src={`/BBFC/${movie!.rated}.svg`}
                width={32}
                height={32}
                alt={`${movie!.rated} rating`}
              />
              <div className="text-2xl font-bold text-white">
                {convertRuntime(movie!.runtime)}
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
          <div id="plot">{movie!.plot}</div>
          {!movie!.language.includes("English") && <div>{movie!.language}</div>}
          <div id="awards">{movie!.awards}</div>
          <div id="ratings" className="flex justify-between gap-2">
            {movie!.ratings.map((rating) => (
              <RatingComponent key={rating.source} rating={rating} />
            ))}
          </div>
          <div id="moreDetails">
            {/* TODO: conditionally pluralise labels */}
            <div>Director: {movie!.director}</div>
            <div>Writers: {movie!.writer}</div>
            <div>Stars: {movie!.actors}</div>
            <div>Box office: {movie!.boxOffice}</div>
          </div>
        </article>
      </main>
      <footer className="flex gap-6 pt-2">
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </footer>
    </div>
  );
}
