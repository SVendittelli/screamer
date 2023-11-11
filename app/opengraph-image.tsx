import { ImageResponse } from "next/og";

const tagline =
  "The original voting app for selecting movies to watch on Halloween";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = `Screamer - ${tagline}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const creepster = fetch(
    new URL(`../public/Creepster-Regular.ttf`, import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center text-white"
        style={{
          backgroundImage: "linear-gradient(to bottom, #991b1b, #dc2626)",
        }}
      >
        <div tw="flex w-full items-center justify-center mb-8">
          <svg
            height="128"
            viewBox="0 0 300 420"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M150 30q15 38 100 150a128 128 0 11-200 0Q135 68 150 30z"
            />
          </svg>
          <p tw="text-9xl ml-2">Screamer</p>
        </div>
        <p tw="w-8/12 text-5xl text-center">{tagline}</p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Creepster",
          data: await creepster,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
