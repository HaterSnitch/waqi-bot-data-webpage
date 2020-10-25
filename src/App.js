import './App.css';
import MainNav from './components/MainNav'
import MLGraph from './components/MLGraph'
import MsgTable from './components/MsgTable'
import Video from './components/Video'
import Cards from './components/cards.js'
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <MainNav />
      <header className="App-header">
      <Grid 
         container
        //  direction="column"
         justify="center"
        alignItems="baseline"
         ><Grid item xs={3}>
        <Typography variant="h2" component="h1" style={{marginTop:50, marginBottom:60}}>
        HaterSnitch's  
        </Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h1" component="h1" style={{marginTop:50, marginBottom:50}}>
         Waqi
        </Typography>
        </Grid>
        </Grid>
        <Typography variant="h6" component="h4">
          <p>We liked the prompt to this project and thought we could really help to stop Islamophobic hate speech. We noticed that many people justify their hate based off of misconceptions of Islam which is why we decided to include specific Qu'ran verses.</p>
          <p>The Naive Bayes algorithm training was the hardest as well as integrating the discord bot with this code. Creating interactive data visualization in react was also challenging. We had never done any of those and they took longer than anticipated. As well for those that had never used a python IDE, there was learning curve with getting all the libraries installed and maneuvering within a virtual environment.</p>
        </Typography>
        <MLGraph />
        <MsgTable />
        <Video />
        <Cards />
      </header>
    </div>
  );
}

export default App;
