import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Popular from "./pages/home/Popular"

// materialUI darkMode components
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from "@mui/material";

import { useThemeContext } from "./context/themeContext";
import Search from "./pages/movies/Search";

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
            </Routes>
          </div>
        </div>
        
      </ThemeProvider>
    </div>
  )
}

export default App
