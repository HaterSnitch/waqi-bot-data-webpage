import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Card from './card.js';

const useStyles = makeStyles((theme) => ({
    root: {
    //   maxWidth: 345,
    }
}));

export default function Cards(){
   
    const classes = useStyles();
    return(
        <Grid
            container 
            className={classes.root} 
            spacing={2}
        >
            <Grid item xs={3}>
            <Card
            name = "Meghana Varanasi"
            img= ""
            github="https://github.com/Meghana-12"
            />
            </Grid>
            <Grid item xs={3}>
                <Card
                name = "Catherine Cheng"
                img=""
                github=""
                />
            </Grid>   
            <Grid item xs={3}>
                <Card
                name = "Nahara"
                
                />
                </Grid>
            <Grid item xs={3}>
                <Card
                name = " Tea Win"
                />
                </Grid>
            
        </Grid>
  
    )
    }
