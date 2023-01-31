import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Component, useCallback } from "react";

// function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (e) => {
    console.log('e: ', e.target.value);
  }

  render() {
    return (
      <div className="App">
        <Particles />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />
        <FaceRecognition /> 
      </div>
    );
  }
}
export default App;
