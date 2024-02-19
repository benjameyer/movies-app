import { TextField, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from "../context/themeContext";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import NavMenu from "./NavMenu";

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
    <div className="fixed z-50 w-screen h-fit flex justify-between flex-wrap items-center py-4 px-6 sm:px-12 bg-white dark:bg-slate-900 shadow-md gap-2">
      <div className="flex gap-2 items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold hover:text-blue-700 dark:hover:text-blue-300">Movies</h1>
        </Link>
        <div className="cursor-pointer hover:text-blue-700 dark:hover:text-blue-300">
          {
            theme === "dark"?
            <Tooltip title="Ligth Mode">
              <div onClick={changeTheme}>
                <Brightness7Icon />
              </div>
            </Tooltip>
            :
            <Tooltip title="Dark Mode">
              <div onClick={changeTheme}>
                <DarkModeIcon />
              </div>
            </Tooltip>
          }
        </div>
      </div>
      
      <form onSubmit={handleSubmit} action="/movies" className="relative">

        <TextField name="q" id="filled-basic" label="Search" variant="filled" className="sm:w-64"
          value={search} onChange={(e) => setSearch(e.target.value)} />

        <button type="submit" className="absolute right-2 top-3.5 hover:text-blue-700 dark:hover:text-blue-300">
          <SearchIcon />
        </button>

      </form>

      <div>
        <NavMenu />
      </div>
    </div>
  )
}

export default NavBar