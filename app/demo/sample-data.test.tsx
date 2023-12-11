import { sampleData } from "./sample-data";

describe("sampleData", () => {
  it("contains 10 movies", () => {
    expect(sampleData.length).toEqual(10);
  });

  it("contains only movies with titles and years", () => {
    sampleData.forEach((movie) => {
      expect(movie.title).toBeDefined();
      expect(movie.year).toBeDefined();
      expect(movie.year).toBeGreaterThan(1890);
      expect(movie.year).toBeLessThan(2024);
    });
  });

  it("contains only movies with posters", () => {
    sampleData.forEach((movie) => {
      expect(movie.poster).toBeDefined();
      expect(movie.poster).toMatch(/^https?:\/\/m.media-amazon.com/);
    });
  });

  it("contains only movies with plot summaries", () => {
    sampleData.forEach((movie) => {
      expect(movie.plot).toBeDefined();
    });
  });

  it("contains only movies with an MPAA rating", () => {
    sampleData.forEach((movie) => {
      expect(movie.rated).toBeDefined();
      expect(movie.rated).toMatch(/U|PG|12A?|15|R?18/);
    });
  });

  it("contains only movies with runtimes", () => {
    sampleData.forEach((movie) => {
      expect(movie.runtime).toBeDefined();
    });
  });

  it("contains only movies with genres", () => {
    sampleData.forEach((movie) => {
      expect(movie.genre).toBeDefined();
    });
  });

  it("contains only movies with directors, writers, and actors", () => {
    sampleData.forEach((movie) => {
      expect(movie.director).toBeDefined();
      expect(movie.writer).toBeDefined();
      expect(movie.actors).toBeDefined();
    });
  });

  it("contains only movies with languages", () => {
    sampleData.forEach((movie) => {
      expect(movie.language).toBeDefined();
    });
  });

  it("contains only movies with awards", () => {
    sampleData.forEach((movie) => {
      expect(movie.awards).toBeDefined();
    });
  });

  it("contains only movies with ratings", () => {
    sampleData.forEach((movie) => {
      expect(movie.ratings).toBeDefined();
      expect(movie.ratings.length).toEqual(3);
      movie.ratings.forEach((rating) => {
        expect(rating.source).toBeDefined();
        expect(rating.source).toMatch(
          /Internet Movie Database|Metacritic|Rotten Tomatoes/,
        );
        expect(rating.value).toBeDefined();
        expect(rating.score).toBeDefined();
        if (rating.source === "Internet Movie Database") {
          expect(rating.score).toBeGreaterThanOrEqual(1);
          expect(rating.score).toBeLessThan(10);
          // Ensure we do not strip off the decimal fraction from IMDb ratings
          expect(Number.isInteger(rating.score)).not.toEqual(true);
        } else {
          expect(rating.score).toBeGreaterThanOrEqual(0);
          expect(rating.score).toBeLessThan(100);
          expect(Number.isInteger(rating.score)).toEqual(true);
        }
      });
    });
  });

  it("contains only movies with an IMDb vote count", () => {
    sampleData.forEach((movie) => {
      expect(movie.imdbVotes).toBeDefined();
    });
  });

  it("contains only movies with an IMDb ID", () => {
    sampleData.forEach((movie) => {
      expect(movie.imdbID).toBeDefined();
    });
  });

  it("contains only movies with box office takings", () => {
    sampleData.forEach((movie) => {
      expect(movie.boxOffice).toBeDefined();
    });
  });
});
