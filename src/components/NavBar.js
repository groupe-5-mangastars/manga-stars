import React, { useContext } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Router from '../Router';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import BookIcon from '@material-ui/icons/Book';
import StarsIcon from '@material-ui/icons/Stars';
import { AuthContext } from '../Auth/AuthProvider';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },


}));



export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { user, logout } = useContext(AuthContext);

  const StarsStyle = {
   color: "gold",
  };

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  function handleLogout() {
    handleMenuClose();
    logout();
  }

  const loggedMenu = () => {
    return [
      <>
        
          <MenuItem onClick={handleMenuClose}>
          <Button variant="contained" color="primary"  component={Link} to="/profile"  className={classes.button}>
          Profile
      </Button>
          </MenuItem>          
        

     

          <MenuItem onClick={handleLogout}>
          <Button variant="contained" color="secondary"  component={Link} to="/logout" className={classes.button}>
          Logout
      </Button>
          </MenuItem>
      </>
    ]
  };

  const unloggedMenu = () => {
    return [
      <>
          <MenuItem onClick={handleMenuClose}>
          <Button variant="contained" color="primary" component={Link} to="/login"  className={classes.button}>
        Sign in
      </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>         
          <Button variant="contained" color="primary" component={Link} to="/register"  className={classes.button}>
          Register
      </Button>
        </MenuItem>
      </>
    ]
  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
            {user ? loggedMenu() : unloggedMenu()}

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <Link to="/mangas">
          <MenuItem onClick={handleMenuClose}>
          <IconButton
          aria-label="List mangas"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="secondary"
        >
        <BookIcon></BookIcon>
        </IconButton>
        <p>Mangas</p>
      </MenuItem> 
        </Link>

        <Link to="/favorite">
          <MenuItem onClick={handleMenuClose}>
          <IconButton
          aria-label="List favorites"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        > 
       <StarsIcon style={StarsStyle}/>
        </IconButton>
        <p>Favorites</p>
      </MenuItem> 
        </Link>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
         

          <StarsIcon className={classes.icon} />

         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

          
         
                {/* <Link to= "/mangas" color="inherit"> */}
                <Button variant="contained" color="default"   component={Link} to="/mangas" className={classes.button}>
                <BookIcon />
        Mangas
      </Button>
      {/* </Link> */}

<div> 
  
</div>

                <Button variant="contained" component={Link} to="/favorite" color="default" className={classes.button}>
                <StarsIcon />
        Favorites
      </Button>

      
      
                
            


            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            
          </div>
          <div className={classes.sectionMobile}>

            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>

          
          </div>
        </Toolbar>
        
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}