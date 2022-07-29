const BASE_ROUTE = `https://api.giphy.com/v1/gifs`;
//TODO bettter use .env
const apiKey = `BPQxDk7fvxwaFbNgBX9xOdvGpBDgEysB`;

const myApi = `vOHddXom32pN7DSUnidbY3eR6SvxM6gg`;
// TODO better use URL params
export const generateSearchQuery = (
  q: string,
  limit: number = 9,
  offset: number = 0,
  rating: string = "pg13",
  lang: string = "en"
) =>
  `${BASE_ROUTE}/search?api_key=${myApi}&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`;

export const generateGetByIDQuery = (ID: string) =>
  `${BASE_ROUTE}/${ID}?api_key=${myApi}`;
