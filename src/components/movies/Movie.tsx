import type { MovieDef } from "../../types/apiTypes"
import StarIcon from '@mui/icons-material/Star';
import {genres} from "../../utils/genres";
import { useState } from "react";
import { Skeleton } from "@mui/material";

function Movie({ movie } : MovieProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [backgroundImageLoading, setBackgroundImageLoading] = useState(true);

  return (
    <div className="bg-white dark:bg-slate-900 w-full rounded-md shadow-md hover:shadow-xl cursor-pointer card-custom">

      {
        imageLoading?
        <Skeleton variant="rounded" width={"w-full"} height={"26rem"} />
        :
        <></>
      }
      <img onLoad={() => setImageLoading(false)} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        className={`w-full rounded-t-md ${imageLoading? "hidden" : "block"}`} />

      <div className="p-2 sm:p-3 flex flex-col gap-2">
        <div className="flex items-end gap-1 text-sm">
          <span className="text-[#F5C518]"><StarIcon /></span>
          <span>{`${Math.round(movie.vote_average*10)/10}`}</span>
          <span className="text-gray-400">({movie.vote_count})</span>
        </div>
        <h2 className="overflow-custom w-fit">{movie.title}</h2>
      </div>
      <div className="bg-white dark:bg-slate-700 absolute top-0 rounded-md h-full info-custom">

        {
          backgroundImageLoading?
          <Skeleton variant="rounded" width={"w-full"} height={"10rem"} />
          :
          <></>
        }
        <img onLoad={() => setBackgroundImageLoading(false)} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
        className={`w-full rounded-t-md ${backgroundImageLoading? "hidden" : "block"}`} />

        <div className="p-2 flex flex-col gap-1">
          <span className="text-gray-400">{(new Date(movie.release_date)).toLocaleDateString()}</span>
          <p className="text-sm md:text-sm xl:text-lg 2xl:text-lg">
            {
              movie.overview.length > 256 ? movie.overview.slice(0, 256)+"..." : movie.overview
            }
          </p>
          <div className="flex gap-1 flex-wrap">
            {
              movie.genre_ids.map(genreId => {
                const genre = genres.find(g => g.id === genreId)
                if (genre) {
                  return (
                  <span key={genre.id} className="bg-gray-200 dark:bg-gray-500 rounded-md px-2 py-1 text-sm">{genre.name}</span>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie

interface MovieProps {
  movie: MovieDef
}