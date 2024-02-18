import { Search } from "../types/apiTypes"
import Movies from "./movies/Movies"
import Pages from "./movies/Pages"
import MovieSkeletons from "./skeletons/MovieSkeletons"

function LoadMovies({ loading, content, setPage } : LoadMoviesProps) {
  return (
    <div className="p-5">
      {
        loading?
        <MovieSkeletons />
        :
        (
          content && content.results.length > 0?
          <>
            <Movies movies={content.results} />
            <Pages page={content.page} setPage={setPage} totalPages={content.total_pages} />
          </>
          :
          <div className="text-center">
            <h1 className="text-3xl">No results</h1>
          </div>
        )
      }
    </div>
  )
}

export default LoadMovies

interface LoadMoviesProps {
  loading: boolean,
  content: Search | undefined,
  setPage: React.Dispatch<React.SetStateAction<number>>
}