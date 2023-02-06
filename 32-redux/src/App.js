import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import './App.css';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';

function App () {
  
  // states with initial state, array destructuring
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  // lifecycle hooks, useEffect  
  //! side effect, and this will auto run every time with App function
  useEffect(() => {  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)})
    
    console.log(count)
  }, [count])  // [], second parameter, avoid rerendering 
  // optional list, run if only changed
  // [searchField] --> if searchField changes, run useEffect 
  //! [count] -- only runs if count changes

  const onSearchChange = (e) => { 
    setSearchField(e.target.value)
  }

  const filteredRobot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  console.log('3- render', robots, searchField);

  // loading
  if (!robots.length) { // if (robots.length === 0) {
    return <h1>Loading...</h1>
  } else {
      return (
        <div className="App tc">
          <h1 className='f1'>RoboFriends</h1>
          <button onClick={() => setCount(count +1)}>Click Me</button>
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
