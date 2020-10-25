import React, { Component } from 'react'; 
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid';
import { GitHub } from '@material-ui/icons';

class MainNav extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
        
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Grid 
            container
            //  direction="column"
            justify="flex-end"
            // alignItems="baseline"
            >
          <Button color="inherit" href="https://technica2020.devpost.com/">Dev</Button>
          <IconButton color="inherit" href="https://github.com/HaterSnitch">
            <GitHub /></IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default MainNav;
