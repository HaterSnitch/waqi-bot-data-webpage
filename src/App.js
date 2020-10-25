import logo from './logo.svg';
import './App.css';
import MainNav from './components/MainNav'
import MLGraph from './components/MLGraph'
import MsgTable from './components/MsgTable'

function App() {
  return (
    <div className="App">
      <MainNav />
      <header className="App-header">
        <p>
        I will be pet i will be pet and then i will hiss sleep on my human's head bird bird bird bird bird bird human why take bird out i could have eaten that or paw your face to wake you up in the morning stare at ceiling light human is washing you why halp oh the horror flee scratch hiss bite but meow in empty rooms. Fall asleep upside-down destroy the blinds but i shall purr myself to sleep ptracy, so lick the other cats. Kitty kitty fall asleep upside-down. The fat cat sat on the mat bat away with paws stretch sun bathe human give me attention meow and cats are a queer kind of folk. Eats owners hair then claws head in the middle of the night i crawl onto your chest and purr gently to help you sleep mewl for food at 4am play riveting piece on synthesizer keyboard, pose purrfectly to show my beauty. So you're just gonna scroll by without saying meowdy?
        </p>
        <MLGraph />
        <MsgTable />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
