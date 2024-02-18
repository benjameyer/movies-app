import { Pagination } from "@mui/material"

function Pages({ page, setPage, totalPages } : PagesProps) {
  return (
    <div className="flex justify-center py-6">
      <Pagination shape="rounded" count={totalPages > 20? page+25 : totalPages} page={page} 
        onChange={(_, value)=>{
          setPage(value)
        }
      }/>
    </div>
  )
}

export default Pages

interface PagesProps {
  page: number,
  totalPages: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}