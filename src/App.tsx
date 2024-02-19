import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Popular from "./pages/sections/Popular"

// materialUI darkMode components
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from "@mui/material";

import { useThemeContext } from "./context/themeContext";
import Search from "./pages/movies/Search";
import Section from "./pages/sections/Section";
import Genre from "./pages/movies/Genre";

function App() {
  const { theme } = useThemeContext();

  // materialUI darkMode components
  const uiTheme = createTheme({
    palette: {
      mode: theme as PaletteMode || 'dark',
    },
  });

  return (
    <div className={`${theme}`}>
      <ThemeProvider theme={uiTheme}>
        <CssBaseline />

        <div className="min-h-screen bg-gray-200 dark:bg-slate-800 dark:text-white relative">
          <NavBar />
          <div className="pt-[6rem]">
            <Routes>
              <Route
                path="/" element={<Popular />} 
              />
              <Route
                path="/movies" element={<Search />}
              />
              <Route
                path="/genres" element={<Genre />}
              />
              <Route
                path="/top_rated"
                element={<Section sectionDisplay="Top Rated" sectionAPI="top_rated" />}
              />
              <Route
                path="/now_playing"
                element={<Section sectionDisplay="Now Playing" sectionAPI="now_playing" />}
              />
              <Route
                path="/upcoming"
                element={<Section sectionDisplay="Upcoming" sectionAPI="upcoming" />}
              />
            </Routes>
          </div>
        </div>
        
      </ThemeProvider>
    </div>
  )
}

export default App
