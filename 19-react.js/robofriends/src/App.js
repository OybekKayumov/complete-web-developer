// import React, { Component} from 'react';
import Hello from './components/Hello';
import './App.css';
import Card from './components/Card';

const App = () => {  
  return (
    <div className="App">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );

}

/*
class App extends Component{
  render () {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}
*/

export default App;

{/* <Hello greeting={'Hello' + ' React Ninja'} /> */}