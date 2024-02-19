import { useState } from "react";
import LoadMovies from "../../components/LoadMovies";
import useGetMovieByGenre from "../../hooks/useGetMovieByGenre";

function Genre() {
  const [page, setPage] = useState(1);
  const { loading, genreResult, strGenre } = useGetMovieByGenre(page);


  return (
    <>
      <h2 className="text-3xl pt-6 pl-4 pb-2 text-gray-500 dark:text-gray-400">{strGenre} Movies</h2>
      <LoadMovies loading={loading} content={genreResult} setPage={setPage} />
    </>
  )
}

export default Genre