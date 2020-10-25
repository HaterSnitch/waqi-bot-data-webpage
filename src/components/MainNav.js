import React, { Component } from 'react'; 
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid';
import { GitHub } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

class MainNav extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
        
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" href="https://devpost.com/software/waqibot">DevPost</Button>
          <Button color="inherit" href="https://github.com/HaterSnitch">Github</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default MainNav;
