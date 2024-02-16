import { Pagination } from "@mui/material"

function Pages({ page, setPage } : PagesProps) {
  return (
    <div className="flex justify-center py-6">
      <Pagination shape="rounded" count={page+24} page={page} 
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
  setPage: React.Dispatch<React.SetStateAction<number>>
}