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

  onSearchChange= (e) => { // use arrow fn, no this keyword, no error
    this.setState({ searchField: e.target.value})
    console.log('event: ', e.target.value);
    // "this" "e" happened in "input" in "SearchBox" class 
    // and input doesn't have state.robots
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    console.log('filteredRobot: ', filteredRobot);
  }

  render () {
    return (
      <div className="App tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
