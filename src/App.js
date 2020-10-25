import './App.css';
import MainNav from './components/MainNav'
import MLGraph from './components/MLGraph'
import MsgTable from './components/MsgTable'
import Video from './components/Video'
import Cards from './components/cards.js'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  typo: {
  margin: 70,
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <MainNav />
   
      <header className="App-header">
      <Grid 
        container
        direction="column"
        alignItems="flex-start"
      >
        <Typography variant="h1" component="h1" style={{marginTop:50, marginBottom:50}}>
        HaterSnitch's WaqiBot
        </Typography>
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
