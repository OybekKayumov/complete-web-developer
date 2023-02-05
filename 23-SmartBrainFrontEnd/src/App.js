import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Component, useCallback } from "react";
// import Clarifai from 'clarifai';
import SignIn from './components/Signin/SignIn';
import Register from './components/Register/Register';

// const app = new Clarifai.App({
//   apiKey: '53e1df302c079b3db8a0a36033ed2d15'
// })

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

// function App() {
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // connect to back end
  // componentDidMount() {
  //   fetch('http://localhost:3000/')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
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
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response =>  {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count }))
        })
         .catch(console.log) 
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err))
  }

  onRouteChanges = (route) => {
    if (route === 'signout') {
      // this.setState({ isSignedIn: false})
      this.setState(initialState)
    } else {
      this.setState({ isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles />
 
        <Navigation 
          isSignedIn={isSignedIn}
          onRouteChanges={this.onRouteChanges}
        />
        { route === 'home' 
          ? <>
              <Logo />
              <Rank />
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onBtnSubmit={this.onBtnSubmit}
              />
              <FaceRecognition 
              box={box}
              imageUrl={imageUrl}
              /> 
            </>
          : (
            route === 'signin' 
              ? <SignIn onRouteChanges={this.onRouteChanges}/>
              : <Register 
                  loadUser={this.loadUser}
                  onRouteChanges={this.onRouteChanges}
                />
          )
        }
      </div>
    );
  }
}
export default App;

// "https://samples.clarifai.com/face-det.jpg"