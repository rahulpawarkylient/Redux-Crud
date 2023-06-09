# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# REDUX(What is and why we use)
Redux is a state management library for JavaScript applications. It is commonly used with frameworks such as React to help manage the state of the application.
# which state is manage global and local or both
Redux is primarily used for managing global state in an application, but it can also be used to manage local state if needed. In Redux, the state is stored in a centralized store, which can be accessed and updated by any part of the application. This allows for a predictable and easy-to-manage state flow throughout the application. While it is possible to use Redux for managing local component state, it is generally recommended to use React's built-in state management for simpler use cases.

Here's how it works step by step:

1 . Redux stores the state of the application in a single object called the "store". The store is an immutable object that can only be changed by dispatching actions to it.

2 . Actions are objects that describe changes to the state of the application. They must have a "type" property which describes the type of action being taken, and can also have additional data associated with them.

3 . Reducers are functions that take the current state of the application and an action as input, and return a new state based on the action type.

4 . When an action is dispatched to the store, the store passes the current state and the action to the reducer, which calculates the new state of the application.

5 . The new state is then stored in the store, and any components that are subscribed to the store are notified of the change.

By using Redux, we can manage the state of our application in a predictable and scalable way, which makes it easier to reason about and maintain our code. It also helps to keep the state of the application separate from the UI components, which can make our code more modular and reusable.

# ActionType.js
This code defines constants that will be used as action types in Redux.

Action types are string values that describe what type of action is being performed in the application.

In this case, the constants represent the different types of actions that can be dispatched in the Redux store.

For example, "MAKE_REQUEST" represents an action that signals that a request is being made to fetch data from an API, while "ADD_USER" represents an action that adds a new user to the list of users in the application.

These constants are used in the action creators and reducers to specify the type of action being performed, ensuring that actions are handled correctly in the Redux store.

# Reducers.js

This code defines a reducer function that updates the state of the application based on different actions. The reducer function takes the current state and an action as input, and returns a new state based on the action type.

The reducer defines an initial state that includes a loading flag, an empty list of users, an empty user object, and an empty error message.

The reducer handles several action types:

1 . The MAKE_REQUEST action sets the loading flag to true.
2 . The FAIL_REQUEST action sets the loading flag to false and sets the error message based on the payload property of the action.
3 . The GET_USER_LIST action sets the loading flag to false, clears the error message, sets the user list to the payload property of the action, and sets the user object to an empty object.
4 . The DELETE_USER, ADD_USER, and UPDATE_USER actions simply set the loading flag to false.
5 . The GET_USER_OBJ action sets the loading flag to false and sets the user object to the payload property of the action.
6 . The default case simply returns the current state if no matching action is found.

Overall, this reducer is responsible for handling different actions related to user management, such as fetching the list of users, adding a new user, updating an existing user, and deleting a user.

# Action.js
This is a file containing various actions (functions) that can be dispatched in Redux to modify the application state. Let's go through each function and understand what it does:

1 . makeRequest: This function returns an action object with the type MAKE_REQUEST. It is used to notify that a request has been initiated.

2 . failRequest: This function returns an action object with the type FAIL_REQUEST and the error message as the payload. It is used to notify that a request has failed.

3 . getUserList: This function returns an action object with the type GET_USER_LIST and an array of user objects as the payload. It is used to update the user list in the state after fetching it from the server.

4 . deleteUser: This function returns an action object with the type DELETE_USER. It is used to notify that a user has been deleted.

5 . addUser: This function returns an action object with the type ADD_USER. It is used to notify that a new user has been added.

6 . updateUser: This function returns an action object with the type UPDATE_USER. It is used to notify that a user has been updated.

7 . getUserObj: This function returns an action object with the type GET_USER_OBJ and a single user object as the payload. It is used to update the user object in the state after fetching it from the server.

8 . fetchUserList: This function is an async action creator that returns a function with dispatch as the parameter. Inside the function, it first dispatches the makeRequest action to indicate that a request is being made. Then, it uses axios to make a GET request to the server and fetches the user list. If successful, it dispatches the getUserList action to update the user list in the state. If an error occurs, it dispatches the failRequest action to notify that the request has failed.

9 . deleteOneUser: This function is an async action creator that takes an id as a parameter and returns a function with dispatch as the parameter. Inside the function, it first dispatches the deleteUser action to indicate that a user is being deleted. Then, it uses axios to make a DELETE request to the server to delete the user with the given id. If successful, it dispatches the fetchUserList action to update the user list in the state. If an error occurs, it dispatches the failRequest action to notify that the request has failed.

10 . FunctionAddUser: This function is an async action creator that takes user data as a parameter and returns a function with dispatch as the parameter. Inside the function, it first dispatches the makeRequest action to indicate that a request is being made. Then, it uses axios to make a POST request to the server to add the user with the given data. If successful, it dispatches the addUser action to notify that a user has been added and displays a success message using the toast function. If an error occurs, it dispatches the failRequest action to notify that the request has failed.

11 . FunctionUpdateUser: This function is an async action creator that takes user data and an id as parameters and returns a function with dispatch as the parameter. Inside the function, it first dispatches the makeRequest action to indicate that a request is being made. Then, it uses axios to make a PUT request to the server to update the user with the given id and data. If successful, it dispatches the updateUser action to notify that a user has been updated and displays a success message using the toast function. If an error occurs, it dispatch

12 . Finally, we have FetchUserObj function which fetches a single user object by its id and dispatches an action getUserObj with the fetched data as its payload.

Overall, this file defines a set of actions that can be dispatched to update the state of the Redux store. Each action is responsible for making an asynchronous API request to the server using Axios library and dispatching a relevant action to the Redux store based on the response from the server. The try and catch blocks are used to handle any errors that may occur during the API request and dispatching of actions. Additionally, some of the functions also use the toast library to display success or error messages to the user.

# Store.js
1 . Importing dependencies:
The code imports several dependencies using the import keyword. These include configureStore and combineReducers from the @reduxjs/toolkit library, logger from the redux-logger library, thunk from the redux-thunk library, and Reducer from another file in the project.

2 . Combining reducers:
The combineReducers function is called to combine multiple reducers into one. In this case, there is only one reducer (Reducer), and it is assigned to the user key of the root reducer. This means that the state of the Store will have a user object with properties specified in the Reducer.

3 . Creating the Store:
The configureStore function is used to create a Store object. This function takes an object with a reducer property, which is set to the rootreducer object that was created earlier using combineReducers().
The middleware property of the configuration object is an array that contains two middleware functions: thunk and logger. These middleware functions are used to handle asynchronous actions and log actions, respectively.

4 . Exporting the Store:
The Store object is exported using the export default statement.

Overall, this code sets up a Redux store with a single reducer (Reducer) and two middleware functions (thunk and logger). The reducer is combined with other reducers (even though there's only one here) using combineReducers(), and then passed to the configureStore() function to create a Redux store. Finally, the created store is exported.