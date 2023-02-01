import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Component, useCallback } from "react";
import Clarifai from 'clarifai';
import SignIn from './Signin/SignIn';

// const app = new Clarifai.App({
//   apiKey: '53e1df302c079b3db8a0a36033ed2d15'
// })

// function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
    }
  }

  calculateFaceLocation = data => {
    const clarifyFace= data.outputs[0].data.regions[0].region_infp.bounding_box;

    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    // console.log(width, height);

    return {
      left: clarifyFace.left_col * width,
      topRow: clarifyFace.top_row * height,
      rightCol: width * (clarifyFace.right_col * width),
      bottomRow: height * (clarifyFace.bottom_col * height),
    }
  }

  displayFaceBox = box => {
    this.setState({ box: box})
  }

  onInputChange = (e) => {
    console.log('e: ', e.target.value);
    this.setState({input: e.target.value})
  }

  onBtnSubmit = () => {
    console.log('click: ');
    this.setState({imageUrl: this.state.input})
    // app.models.predict(
    //   Clarifai.FACE_DETECT_MODEL,
    //   this.state.input)
    // .then(response =>  this.displayFaceBox(this.calculateFaceLocation(response)))
    // .catch(err => console.log(err))
  }

  onRouteChanges = () => {
    this.setState({route: 'home'})
  }

  render() {
    return (
      <div className="App">
        <Particles />
 
        <Navigation  onRouteChanges={this.onRouteChanges}/>
        { this.state.route === 'signin' 
          ? <SignIn onRouteChanges={this.onRouteChanges}/>
          : <>
            <Logo />
            <Rank />
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onBtnSubmit={this.onBtnSubmit}
            />
            <FaceRecognition 
            box={this.state.box}
            imageUrl={this.state.imageUrl}
            /> 
          </>
        }
      </div>
    );
  }
}
export default App;

// "https://samples.clarifai.com/face-det.jpg"