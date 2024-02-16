import { useEffect, useState } from "react"
import type { Search } from "../utils/apiDef"

function useGetPopularMovies(page: number) {
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<Search>();

  const API_KEY = import.meta.env.VITE_MBD_API_KEY;

  useEffect(() => {
    const getPopularMovies = () => {
      setLoading(true);
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then(res => res.json())
        .then((data: Search) => {
          setPopularMovies(data);
          setLoading(false);
        })
    }

    getPopularMovies();
  }, [API_KEY, page])

  return { loading, popularMovies };
}

export default useGetPopularMovies