import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home"

// materialUI darkMode components
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from "@mui/material";

import { useThemeContext } from "./context/themeContext";

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
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
