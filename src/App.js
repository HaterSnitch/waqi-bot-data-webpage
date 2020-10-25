import './App.css';
import MainNav from './components/MainNav'
import MLGraph from './components/MLGraph'
import MsgTable from './components/MsgTable'
import Video from './components/Video'
import Cards from './components/cards.js'
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Img} from 'react-image';
import a from './images/a.png'
import b from './images/b.png'
import c from './images/c.png'

function App() {
  return (
    <div className="App" style={{overflow:"hidden"}}>
      <MainNav />
      <header className="App-header">
        <Grid 
          container
          direction="column"
          alignItems="flex-start"
        >
          <Typography variant="h1" component="h1" style={{marginTop:50, marginBottom:50}}>
            WaqiBot
          </Typography>
        </Grid>
        <Typography variant="h6" component="h4">
          <p>We liked the prompt to this project and thought we could really help to stop Islamophobic hate speech. We noticed that many people justify their hate based off of misconceptions of Islam which is why we decided to include specific Qu'ran verses.</p>
          <p>The Naive Bayes algorithm training was the hardest as well as integrating the discord bot with this code. Creating interactive data visualization in react was also challenging. We had never done any of those and they took longer than anticipated. As well for those that had never used a python IDE, there was learning curve with getting all the libraries installed and maneuvering within a virtual environment.</p>
        </Typography>
        <h3 style={{ alignContent: 'left' }}>WaqiBot in action</h3>
        <img src={a} style={{margin:"3%"}}/>
       
        <img src={c} style={{margin:"3%"}}/>
        <img src={b} style={{margin:"3%"}}/>
        <h3 style={{ alignContent: 'left' }}>WaqiBot predicts positive and negative sentiment</h3>
        <MLGraph />
        <h3 style={{ alignContent: 'left' }}>WaqiBot runs on all messages on the Discord server</h3>
        <MsgTable />
        <h3 style={{ alignContent: 'left' }}>Video</h3>
        <Video />
        <h3 style={{ alignContent: 'left' }}>Meet Team Hater Snitch</h3>
        <Cards />
      </header>
    </div>
  );
}

export default App;
