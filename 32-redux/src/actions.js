import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from "./constants";

// action name is setSearchField, it is going to take (text), which is a user input and going to return an object
// object with type setSearchField, action 'CHANGE_SEARCH_FIELD' and going to send (text) - whatever data is needed to go on to the reducer 
// constant - capitalized

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING})
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
  .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err}))
}



