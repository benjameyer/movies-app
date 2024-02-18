import Movie from "./Movie";
import type { MovieDef } from "../../types/apiTypes"

function Movies({ movies } : MoviesProps) {
  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {
        movies && movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))
      }
    </div>
  )
}

export default Movies


interface MoviesProps {
  movies: MovieDef[]
}