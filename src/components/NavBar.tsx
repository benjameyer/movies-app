import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from "../context/themeContext";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

function NavBar() {
  const { theme, setTheme } = useThemeContext();
  const [search, setSearch] = useState("");

  const changeTheme = () => {
    const wasDark = theme === "dark";
    wasDark? setTheme("light") : setTheme("dark");
    localStorage.setItem("theme", wasDark? "light" : "dark");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!search || search.length > 128) {
      event.preventDefault();
      return setSearch("");
    }
  };

  return (
    <div className="fixed z-50 w-screen h-[6rem] flex justify-between items-center px-6 sm:px-12 bg-white dark:bg-slate-900 shadow-md gap-2">
      <div className="flex gap-2 items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold hover:text-slate-400">Movies</h1>
        </Link>
        {
          theme === "dark"?
          <div className="cursor-pointer hover:text-slate-400" onClick={changeTheme}>
            <Brightness7Icon />
          </div>
          :
          <div className="cursor-pointer hover:text-slate-400" onClick={changeTheme}>
            <DarkModeIcon />
          </div>
        }
      </div>
      
      <form onSubmit={handleSubmit} action="/movies" className="relative">

        <TextField name="q" id="filled-basic" label="Search" variant="filled" className="sm:w-64"
          value={search} onChange={(e) => setSearch(e.target.value)} />

        <button type="submit" className="absolute right-2 top-3.5 hover:text-blue-300">
          <SearchIcon />
        </button>

      </form>
    </div>
  )
}

export default NavBar