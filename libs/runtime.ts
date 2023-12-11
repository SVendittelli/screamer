export type Runtime = `${number} min`;

/**
 * Give a readable runtime for a film.
 * @param runtime The runtime of the film
 * @returns The runtime of the film in hours and minutes
 */
export function convertRuntime(runtime: Runtime) {
  const runtimeInMinutes = runtime.split(" ")[0];
  const hours = Math.floor(Number(runtimeInMinutes) / 60);
  const minutes = Number(runtimeInMinutes) % 60;
  return `${hours}h ${minutes}m`;
}
