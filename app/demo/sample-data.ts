import {
  UKRating,
  USRating,
  convertContentRating,
} from "@/libs/content-rating";
import { Runtime } from "@/libs/runtime";

type OMDbMovie = {
  Title: string;
  Year: string;
  Rated: USRating;
  Released: string;
  Runtime: Runtime;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

type OMDbError = { Response: string; Error: string };

export type Rating = {
  source: "Internet Movie Database" | "Metacritic" | "Rotten Tomatoes";
  value: string;
  score: number;
};

type Movie = {
  title: string;
  year: number;
  poster: string;
  plot: string;
  rated: UKRating;
  runtime: Runtime;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  language: string;
  awards: string;
  ratings: Rating[];
  imdbVotes: string;
  imdbID: string;
  boxOffice: string;
};

const omdbMovies: Partial<OMDbMovie>[] = [
  {
    Title: "Alien",
    Year: "1979",
    Rated: "R",
    Runtime: "117 min",
    Genre: "Horror, Sci-Fi",
    Director: "Ridley Scott",
    Writer: "Dan O'Bannon, Ronald Shusett",
    Actors: "Sigourney Weaver, Tom Skerritt, John Hurt",
    Plot: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.",
    Language: "English",
    Awards: "Won 1 Oscar. 18 wins & 22 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "89/100" },
    ],
    imdbVotes: "926,025",
    imdbID: "tt0078748",
    BoxOffice: "$81,900,459",
  },
  {
    Title: "Let the Right One In",
    Year: "2008",
    Rated: "R",
    Runtime: "114 min",
    Genre: "Drama, Fantasy, Horror",
    Director: "Tomas Alfredson",
    Writer: "John Ajvide Lindqvist",
    Actors: "Kåre Hedebrant, Lina Leandersson, Per Ragnar",
    Plot: "Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.",
    Language: "Swedish, Spanish",
    Awards: "Nominated for 1 BAFTA Award76 wins & 58 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjFjYmQ5OWItYTFiNy00Nzc5LTkyZGQtYmE0MDRhMjUwY2I5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "82/100" },
    ],
    imdbVotes: "223,610",
    imdbID: "tt1139797",
    BoxOffice: "$2,122,065",
  },
  {
    Title: "Aliens",
    Year: "1986",
    Rated: "R",
    Runtime: "137 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "James Cameron",
    Writer: "James Cameron, David Giler, Walter Hill",
    Actors: "Sigourney Weaver, Michael Biehn, Carrie Henn",
    Plot: "Decades after surviving the Nostromo incident, Ellen Ripley is sent out to re-establish contact with a terraforming colony but finds herself battling the Alien Queen and her offspring.",
    Language: "English, Spanish",
    Awards: "Won 2 Oscars. 20 wins & 25 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGJkY2EyOWYtYWRmNy00ZTEzLTllMDAtYzYzYjA0ZjFhZWJjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.4/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "84/100" },
    ],
    imdbVotes: "747,025",
    imdbID: "tt0090605",
    BoxOffice: "$85,160,248",
  },
  {
    Title: "Jaws",
    Year: "1975",
    Rated: "PG",
    Runtime: "124 min",
    Genre: "Adventure, Mystery, Thriller",
    Director: "Steven Spielberg",
    Writer: "Peter Benchley, Carl Gottlieb",
    Actors: "Roy Scheider, Robert Shaw, Richard Dreyfuss",
    Plot: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    Language: "English",
    Awards: "Won 3 Oscars. 15 wins & 20 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "97%" },
      { Source: "Metacritic", Value: "87/100" },
    ],
    imdbVotes: "644,091",
    imdbID: "tt0073195",
    BoxOffice: "$265,859,065",
  },
  {
    Title: "The Silence of the Lambs",
    Year: "1991",
    Rated: "R",
    Runtime: "118 min",
    Genre: "Crime, Drama, Thriller",
    Director: "Jonathan Demme",
    Writer: "Thomas Harris, Ted Tally",
    Actors: "Jodie Foster, Anthony Hopkins, Scott Glenn",
    Plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    Language: "English, Latin",
    Awards: "Won 5 Oscars. 70 wins & 50 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.6/10" },
      { Source: "Rotten Tomatoes", Value: "95%" },
      { Source: "Metacritic", Value: "86/100" },
    ],
    imdbVotes: "1,505,680",
    imdbID: "tt0102926",
    BoxOffice: "$130,742,922",
  },
  {
    Title: "Get Out",
    Year: "2017",
    Rated: "R",
    Runtime: "104 min",
    Genre: "Horror, Mystery, Thriller",
    Director: "Jordan Peele",
    Writer: "Jordan Peele",
    Actors: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
    Plot: "A young African-American visits his White girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    Language: "English, Swahili",
    Awards: "Won 1 Oscar. 152 wins & 207 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "85/100" },
    ],
    imdbVotes: "668,240",
    imdbID: "tt5052448",
    BoxOffice: "$176,196,665",
  },
  {
    Title: "Psycho",
    Year: "1960",
    Rated: "R",
    Runtime: "109 min",
    Genre: "Horror, Mystery, Thriller",
    Director: "Alfred Hitchcock",
    Writer: "Joseph Stefano, Robert Bloch",
    Actors: "Anthony Perkins, Janet Leigh, Vera Miles",
    Plot: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    Language: "English",
    Awards: "Nominated for 4 Oscars. 8 wins & 14 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "97%" },
      { Source: "Metacritic", Value: "97/100" },
    ],
    imdbVotes: "703,743",
    imdbID: "tt0054215",
    BoxOffice: "$32,000,000",
  },
  {
    Title: "A Quiet Place",
    Year: "2018",
    Rated: "PG-13",
    Runtime: "90 min",
    Genre: "Drama, Horror, Sci-Fi",
    Director: "John Krasinski",
    Writer: "Bryan Woods, Scott Beck, John Krasinski",
    Actors: "Emily Blunt, John Krasinski, Millicent Simmonds",
    Plot: "A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.",
    Language: "American Sign , English",
    Awards: "Nominated for 1 Oscar. 37 wins & 128 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.5/10" },
      { Source: "Rotten Tomatoes", Value: "96%" },
      { Source: "Metacritic", Value: "82/100" },
    ],
    imdbVotes: "565,622",
    imdbID: "tt6644200",
    BoxOffice: "$188,024,361",
  },
  {
    Title: "Halloween",
    Year: "1978",
    Rated: "R",
    Runtime: "91 min",
    Genre: "Horror, Thriller",
    Director: "John Carpenter",
    Writer: "John Carpenter, Debra Hill",
    Actors: "Donald Pleasence, Jamie Lee Curtis, Tony Moran",
    Plot: "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
    Language: "English",
    Awards: "9 wins & 3 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      { Source: "Rotten Tomatoes", Value: "96%" },
      { Source: "Metacritic", Value: "87/100" },
    ],
    imdbVotes: "300,659",
    imdbID: "tt0077651",
    BoxOffice: "$47,160,000",
  },
  {
    Title: "Shaun of the Dead",
    Year: "2004",
    Rated: "R",
    Runtime: "99 min",
    Genre: "Comedy, Horror",
    Director: "Edgar Wright",
    Writer: "Simon Pegg, Edgar Wright",
    Actors: "Simon Pegg, Nick Frost, Kate Ashfield",
    Plot: "The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.",
    Language: "English",
    Awards: "Nominated for 3 BAFTA 14 wins & 20 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.9/10" },
      { Source: "Rotten Tomatoes", Value: "92%" },
      { Source: "Metacritic", Value: "76/100" },
    ],
    imdbVotes: "582,569",
    imdbID: "tt0365748",
    BoxOffice: "$13,542,874",
  },
];

export const sampleData: Movie[] = omdbMovies.map((omdbMovie) => ({
  title: omdbMovie.Title!,
  year: parseInt(omdbMovie.Year!),
  poster: omdbMovie.Poster!,
  plot: omdbMovie.Plot!,
  rated: convertContentRating(omdbMovie.Rated!),
  runtime: omdbMovie.Runtime!,
  genre: omdbMovie.Genre!,
  director: omdbMovie.Director!,
  writer: omdbMovie.Writer!,
  actors: omdbMovie.Actors!,
  language: omdbMovie.Language!,
  awards: omdbMovie.Awards!,
  ratings: omdbMovie.Ratings!.map(
    (rating) =>
      ({
        source: rating.Source,
        value: rating.Value,
        score: parseFloat(rating.Value.split(/%|\//)[0]),
      }) as Rating,
  ),
  imdbVotes: omdbMovie.imdbVotes!,
  imdbID: omdbMovie.imdbID!,
  boxOffice: omdbMovie.BoxOffice!,
}));
