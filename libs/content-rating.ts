export type USRating = "G" | "PG" | "PG-13" | "R" | "NC-17";
export type UKRating = "U" | "PG" | "12" | "12A" | "15" | "18" | "R18";

/**
 * Convert American film rating to UK film rating.
 * @param usRating The US MPAA content rating
 * @returns The UK film rating
 */
export function convertContentRating(usRating: USRating): UKRating {
  switch (usRating) {
    case "G":
      return "U";
    case "PG":
      return "PG";
    case "PG-13":
      return "12A";
    case "R":
      return "15";
    case "NC-17":
      return "18";
  }
}
