import { useState } from "react";
import LoadMovies from "../../components/LoadMovies"
import useGetMovieSearch from "../../hooks/useGetMovieSearch";

function Search() {
  const [page, setPage] = useState(1);
  const { loading, searchResult, query } = useGetMovieSearch(page);

  return (
    <>
      <h2 className="text-3xl pt-6 pl-4 pb-2 text-gray-500 dark:text-gray-400">Results for: {query}</h2>
      <LoadMovies loading={loading} content={searchResult} setPage={setPage} />
    </>
  )
}

export default Search