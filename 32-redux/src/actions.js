import { CHANGE_SEARCH_FIELD } from "./constants";

// action name is setSearchField, it is going to take (text), which is a user input and going to return an object
// object with type setSearchField, action 'CHANGE_SEARCH_FIELD' and going to send (text) - whatever data is needed to go on to the reducer 
// constant - capitalized

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})



