import { useEffect, useState } from "react"
import { Search } from "../types/apiTypes";

function useGetSection(section: string , page: number) {
  const [loading, setLoading] = useState(false);
  const [sectionResult, setSectionResult] = useState<Search>();

  const API_KEY = import.meta.env.VITE_MBD_API_KEY;

  useEffect(() => {
    const getSection = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${section}?api_key=${API_KEY}&language=en-US&page=${page}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setSectionResult(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getSection();
  }, [API_KEY, page, section]);

  return { sectionResult, loading };
}

export default useGetSection