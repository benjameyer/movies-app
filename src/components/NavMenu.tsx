import { useState } from 'react';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../context/themeContext';
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { genres } from "../utils/genres";


function NavMenu() {

  const { theme } = useThemeContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [genresOpen, setGenresOpen] = useState(false);
  const handleClickGenres = () => {
    setGenresOpen(!genresOpen);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize='large' className='text-black hover:text-blue-700 dark:text-white dark:hover:text-blue-300' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          className: `${theme === "dark"? "bg-slate-700" : "bg-gray-100"} min-w-[10rem] `,
        }}
      >
        <Link to='/'>
          <MenuItem>Popular</MenuItem>
        </Link>

        <Link to='/top_rated'>
          <MenuItem>Top Rated</MenuItem>
        </Link>

        <Link to='/now_playing'>
          <MenuItem>Now Playing</MenuItem>
        </Link>

        <Link to='/upcoming'>
          <MenuItem>Upcoming</MenuItem>
        </Link>

        <MenuItem onClick={handleClickGenres}>
          Genres
          {genresOpen ? <ExpandLess /> : <ExpandMore />}
        </MenuItem>
        <Collapse in={genresOpen} timeout="auto" unmountOnExit>
          {
            genres.map((genre, index) => {
              return (
                <a key={index} href={`/genres?id=${genre.id}&str=${genre.name}`}>
                  <MenuItem sx={{ paddingLeft: "2rem", fontSize: "0.8rem" }}>{genre.name}</MenuItem>
                </a>
              )
            })
          }
        </Collapse>
      </Menu>
    </div>
  )
}

export default NavMenu