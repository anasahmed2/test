import "./style.css"
import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from "react-router-dom";

// pages
const pages = ['home', 'how it Works', 'Who we serve', 'What we Offer', 'Contact Us'];
const pagesObj = [
  { id: "hero", name: "Hero" },
  { id: 'how-it-Works', name: 'how it Works' },
  { id: 'what-we-Offer', name: 'What we Offer' },
  { id: 'who-we-serve', name: 'Who we serve' },
  { id: 'contact Us', name: 'Contact Us' }];

function ResponsiveAppBar() {
  const [barColor, setBarColor] = useState(false)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [active, setActive] = useState("hero")

  const handleNavColor = () => {
    const div = document.getElementById("hero")
    const rect = div.getBoundingClientRect().bottom
    let rectRound = Math.round(rect / 27)
    if (rectRound < 20) {
      setBarColor(true)
    }
    else {
      setBarColor(false)

    }

  }

  const handleScroll = () => {
    // Calculate the index of the active div based on scroll position
    // You may need to customize this logic based on your layout
    // const scrollTop = window.scrollY;
    const divElements = document.querySelectorAll(".scroll-div");
    let newIndex = 0;
    for (let i = 0; i < divElements.length; i++) {
      const div = divElements[i];
      const rect = div.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 2) {
        newIndex = div.id;
      }
    }
    console.log(newIndex)
    setActive(newIndex);
  };

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleNavColor)
    return () => {
      window.removeEventListener("scroll", handleNavColor);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (

    <AppBar
      className={`${barColor ? "bg-Nav" : "bg-tarns"}`}
      sx={{
        minHeight: '100px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .2s ease-in-out",
        animationDelay: "1s"

      }} position="fixed">
      <Container>
        <Toolbar disableGutters>
          <img src={logo} data-aos="fade" data-aos-easing="linear"
            data-aos-duration="1500" className="navLogo" />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pagesObj.map((page) => (
                <MenuItem sx={{ backgroundColor: "black" }} key={page} onClick={handleCloseNavMenu}>
                  <Typography
                  onClick={() => handleCloseNavMenu(page.id)}
                    sx={{
                      backgroundColor: "Black", color: "#ffff",
                      fontFamily: 'monospace',
                      fontWeight: 500,
                      letterSpacing: '-0.025rem',
                      textDecoration: 'none',
                      fontSize: '17px'
                    }}
                    textAlign="center">
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <div className="midLogo">
              <img src={logo} />
            </div>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
            {pagesObj.map((page) => (


              <Button
                data-aos="fade" data-aos-easing="linear"
                data-aos-duration="1500"
                key={page.id}
                onClick={() => handleCloseNavMenu(page.id)}
                className={`${active === page.id && "activeColor"}`}
                sx={{ my: 2, color: 'white', marginLeft: "20px", marginRight: "20px", display: 'block' }}
              >
                {page.name}
              </Button>

            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;