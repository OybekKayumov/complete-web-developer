import React, { Component} from 'react';
import Hello from './components/Hello';
import Card from './components/Card';
import CardList from './components/CardList';
import { robots } from './components/robots';
import './App.css';
import SearchBox from './components/SearchBox';

// const App = () => {  
//   return (
//     <div className="App tc">
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// }

//TODO: STATE
// const state = {
//   robots: robots,
//   searchField: ''
// }
class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  
  render () {
    return (
      <div className="App tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
