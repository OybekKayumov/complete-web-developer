// import React, { Component} from 'react';
import Hello from './components/Hello';
import './App.css';
import Card from './components/Card';
import { robots } from './components/robots';
import CardList from './components/CardList';

const App = () => {  
  return (
    <div className="App">
      <CardList robots={robots} />
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