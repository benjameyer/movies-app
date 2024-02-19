import { useEffect, useState } from "react"
import type { Search } from "../types/apiTypes"

function useGetPopularMovies(page: number) {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Search>();

  const query = (new URLSearchParams(window.location.search)).get("q");

  const API_KEY = import.meta.env.VITE_MBD_API_KEY;

  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setSearchResult(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getPopularMovies();
  }, [API_KEY, page, query])

  return { loading, searchResult, query };
}

export default useGetPopularMovies