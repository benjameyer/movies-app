import { Skeleton } from "@mui/material"

function MovieSkeletons() {
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((_, index) => <Skeleton variant="rounded" key={index} height={400}/>)}
    </div>
  )
}

export default MovieSkeletons