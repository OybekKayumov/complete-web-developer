// import React, { Component} from 'react';
import Hello from './components/Hello';
import './App.css';
import Card from './components/Card';
import { robots } from './components/robots';

const App = () => {  
  return (
    <div className="App">
      <Card 
        id={robots[0].id}
        name={robots[0].name}
        email={robots[0].email}
      />
      <Card 
        id={robots[1].id}
        name={robots[1].name}
        email={robots[1].email}
      />
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