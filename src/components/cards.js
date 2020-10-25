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
            img= "../images/meg.jpeg"
            github="https://github.com/Meghana-12"
            linkedin="https://www.linkedin.com/in/varanasi-meghana-1671b1192/"
            />
            </Grid>
            <Grid item xs={3}>
                <Card
                name = "Catherine Cheng"
                img= ""
                github="https://github.com/chengjieyun59"
                linkedin="https://www.linkedin.com/in/cat-cheng/"
                />
            </Grid>   
            <Grid item xs={3}>
                <Card
                name = "Nahara Johnson"
                img= ""
                github="https://github.com/nahara7"
                linkedin="https://www.linkedin.com/in/nahara-johnson-a68789192/"
                />
                </Grid>
            <Grid item xs={3}>
                <Card
                name = " Tea Win"
                img= ""
                github="https://github.com/tea-win"
                linkedin=""
                />
                </Grid>
            
        </Grid>
  
    )
    }
