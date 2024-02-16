import Movies from "../../components/movies/Movies"
import Pages from "../../components/movies/Pages"
import useGetPopularMovies from "../../hooks/useGetPopularMovies";
import MovieSkeletons from "../../components/skeletons/MovieSkeletons";
import { useState } from "react";

function Home() {
  const [page, setPage] = useState(1);
  const { loading, popularMovies } = useGetPopularMovies(page);

  return (
    <div className="p-5">
      {
        loading?
        <MovieSkeletons />
        :
        popularMovies && 
        <>
          <Movies movies={popularMovies.results} />
          <Pages page={popularMovies.page} setPage={setPage}/>
        </>
      }
    </div>
  )
}

export default Home