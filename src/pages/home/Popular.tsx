import useGetPopularMovies from "../../hooks/useGetPopularMovies";
import { useState } from "react";
import LoadMovies from "../../components/LoadMovies";

function Home() {
  const [page, setPage] = useState(1);
  const { loading, popularMovies } = useGetPopularMovies(page);

  return (
    <>
      <h2 className="text-3xl pt-6 pl-4 pb-2 text-gray-500 dark:text-gray-400">Popular</h2>
      <LoadMovies loading={loading} content={popularMovies} setPage={setPage} />
    </>
  )
}

export default Home