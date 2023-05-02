import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Importing necessary dependencies
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducers"; // Importing the Reducer from its file

const rootreducer = combineReducers({ user: Reducer }); // Combining multiple reducers into one using combineReducers
// Here we are creating a root reducer with key 'user' and the value is the Reducer we imported earlier
// This means that our state will have a 'user' object with properties specified in the Reducer

const Store = configureStore({
  reducer: rootreducer, // Setting the root reducer for the Store
  middleware: [thunk, logger], // Adding middleware for async actions and logging actions
});

export default Store; // Exporting the created store
