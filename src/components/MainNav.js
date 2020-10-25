import React, { Component } from 'react'; 
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

class MainNav extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" href="https://technica2020.devpost.com/">DevPost</Button>
          <Button color="inherit" href="https://github.com/HaterSnitch">Github</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default MainNav;
