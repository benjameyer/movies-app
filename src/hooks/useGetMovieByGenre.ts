import { useEffect, useState } from "react";
import { Search } from "../types/apiTypes";

function useGetMovieByGenre(page: number) {
  const [loading, setLoading] = useState(false);
  const [genreResult, setGenreResult] = useState<Search>();

  const idGenre = (new URLSearchParams(window.location.search)).get("id");
  const strGenre = (new URLSearchParams(window.location.search)).get("str");

  const API_KEY = import.meta.env.VITE_MBD_API_KEY;

  useEffect(() => {
    const getMoviesByGenre = async () => {
      setLoading(true);

      try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${idGenre}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setGenreResult(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getMoviesByGenre();
  }, [API_KEY, page, idGenre]);

  return { loading, genreResult, strGenre };
}

export default useGetMovieByGenre