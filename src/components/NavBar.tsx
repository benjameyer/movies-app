import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from "../context/themeContext";

function NavBar() {
  const { theme, setTheme } = useThemeContext();

  const changeTheme = () => {
    const wasDark = theme === "dark";
    wasDark? setTheme("light") : setTheme("dark");
    localStorage.setItem("theme", wasDark? "light" : "dark");
  }

  return (
    <div className="fixed w-screen h-[6rem] flex justify-between items-center px-12 bg-white dark:bg-slate-900 shadow-md">
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
      <TextField id="filled-basic" label="Search" variant="filled" />
    </div>
  )
}

export default NavBar