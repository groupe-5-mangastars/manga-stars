import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import StarsIcon from '@material-ui/icons/Stars';
import BookIcon from '@material-ui/icons/Book';


const useStyles = makeStyles({
  root: {
    paddingTop : 800,
    width: 'auto',
    height : 'auto'
  },
  icon: {
    color: 'gold',
    weight: 400

  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <Link to="/">
      <BottomNavigationAction label="Accueil"  icon={<HomeIcon />}  /> </Link>
      <Link to="/mangas">
      <BottomNavigationAction label="Mangas" icon={<BookIcon />} /></Link>
      <Link to="/favoris">
      <BottomNavigationAction label="Favoris"  className={classes.icon} icon={<StarsIcon />} /></Link>   
    </BottomNavigation>
  );
}