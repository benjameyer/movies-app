import { useState } from "react";
import LoadMovies from "../../components/LoadMovies";
import useGetSection from "../../hooks/useGetSection";


function Section({ sectionDisplay, sectionAPI }: SectionProps) {
  const [page, setPage] = useState(1);
  const { loading, sectionResult } = useGetSection(sectionAPI, page);

  return (
    <>
      <h2 className="text-3xl pt-6 pl-4 pb-2 text-gray-500 dark:text-gray-400">{sectionDisplay}</h2>
      <LoadMovies loading={loading} content={sectionResult} setPage={setPage} />
    </>
  )
}

export default Section

interface SectionProps {
  sectionAPI: string,
  sectionDisplay: string
}