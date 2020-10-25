import './App.css';
import MainNav from './components/MainNav'
import MLGraph from './components/MLGraph'
import MsgTable from './components/MsgTable'
import Video from './components/Video'
import Cards from './components/cards.js'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typo: {
  margin: 20,
  }
}));
function App() {
  return (
    <div className="App">
      <MainNav />
   
      <header className="App-header">
        <Typography variant="h1" component="h1" style={{margin: 20}}>
          WaqiBot
        </Typography>
        <Typography variant="h2" component="h1" style={{margin: 20}}>
          - Product of HaterSnitch
        </Typography>
        <Typography variant="h5" component="h2">
          <p>We liked the prompt to this project and thought we could really help to stop Islamophobic hate speech. We noticed that many people justify their hate based off of misconceptions of Islam which is why we decided to include specific Qu'ran verses.</p>
          <p>The Naive Bayes algorithm training was the hardest as well as integrating the discord bot with this code. Creating interactive data visualization in react was also challenging. We had never done any of those and they took longer than anticipated. As well for those that had never used a python IDE, there was learning curve with getting all the libraries installed and maneuvering within a virtual environment.</p>
          <p></p>
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
