import React, { useState, useEffect } from 'react';
// import Hello from './components/Hello';
// import Card from './components/Card';
import CardList from './components/CardList';
// import { robots } from './components/robots';
import './App.css';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';

function App () {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchField: ''
  //   }

  //   console.log('1- constructor');
  // }

  // states with initial state, array destructuring
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  // lifecycle hooks, useEffect


  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(users => {
  //       this.setState({ robots: users})
  //     })
  //   // this.setState({ robots: robots })
  //   console.log('2- componentDidMount');
  // }
  //! side effect, and this will auto run every time with App function
  useEffect(() => {  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)})
  }, [])  // second parameter, avoid rerendering 
  // optional list, run if only changed
  // [searchField] --> if searchField changes, run useEffect 
  // [] 

  const onSearchChange = (e) => { // use arrow fn, no this keyword, no error
    setSearchField(e.target.value)
  }

    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    console.log('3- render', robots, searchField);

    // loading
    // if (robots.length === 0) {
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
        return (
          <div className="App tc">
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobot} />
              </ErrorBoundry>
            </Scroll>
          </div>
        );
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