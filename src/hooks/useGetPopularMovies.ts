import { useEffect, useState } from "react"
import type { Search } from "../types/apiTypes"

function useGetPopularMovies(page: number) {
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<Search>();

  const API_KEY = import.meta.env.VITE_MBD_API_KEY;

  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setPopularMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getPopularMovies();
  }, [API_KEY, page])

  return { loading, popularMovies };
}

export default useGetPopularMovies