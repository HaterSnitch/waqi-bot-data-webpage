import logo from './logo.svg';
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
        I will be pet i will be pet and then i will hiss sleep on my human's head bird bird bird bird bird bird human why take bird out i could have eaten that or paw your face to wake you up in the morning stare at ceiling light human is washing you why halp oh the horror flee scratch hiss bite but meow in empty rooms. Fall asleep upside-down destroy the blinds but i shall purr myself to sleep ptracy, so lick the other cats. Kitty kitty fall asleep upside-down. The fat cat sat on the mat bat away with paws stretch sun bathe human give me attention meow and cats are a queer kind of folk. Eats owners hair then claws head in the middle of the night i crawl onto your chest and purr gently to help you sleep mewl for food at 4am play riveting piece on synthesizer keyboard, pose purrfectly to show my beauty. So you're just gonna scroll by without saying meowdy?
        </Typography>
        <MLGraph />
        <MsgTable />
        <Video />
       <Cards/>
      </header>
    </div>
  );
}

export default App;
