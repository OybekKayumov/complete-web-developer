import React, { Component} from 'react';
import Hello from './components/Hello';
import Card from './components/Card';
import CardList from './components/CardList';
// import { robots } from './components/robots';
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
class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }

    console.log('1- constructor');
  }

  // lifecycle
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users})
      })
    // this.setState({ robots: robots })
    console.log('2- componentDidMount');
  }

  onSearchChange= (e) => { // use arrow fn, no this keyword, no error
    this.setState({ searchField: e.target.value})
    
  }

  render () {
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    console.log('3- render');

    // loading
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
        return (
          <div className="App tc">
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobot} />
          </div>
        );
    }
  }
}

export default App;

// robots: robots,

// https://reactjs.org/docs/react-component.html
// ! lifecycle: renders again
// 1- constructor
// 3- render
// 2- componentDidMount
// 3- render