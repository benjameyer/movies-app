import { useEffect, useState } from "react"
import type { Search } from "../types/apiTypes"

function useGetPopularMovies(page: number) {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Search>();

  const query = (new URLSearchParams(window.location.search)).get("q");

  const API_KEY = import.meta.env.VITE_MBD_API_KEY;

  useEffect(() => {
    const getPopularMovies = () => {
      setLoading(true);
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`)
        .then(res => res.json())
        .then((data: Search) => {
          setSearchResult(data);
          setLoading(false);
        })
    }

    getPopularMovies();
  }, [API_KEY, page, query])

  return { loading, searchResult, query };
}

export default useGetPopularMovies