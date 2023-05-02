// This line imports three action types that will be used to update the state of the reducer.
import {
    ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";

// This defines the initial state of the reducer, which includes a loading flag, an empty list of users, an empty user object, and an empty error message
const initialState = {
  loading: true,
  userList: [],
  userObject: {},
  errormessage: "",
};

// This defines the reducer function itself, which takes the current state and an action as input, and returns a new state based on the action type.

// 1. The MAKE_REQUEST action sets the loading flag to true.

//    The GET_USER_LIST action sets the userList to an empty list.

// 2. The FAIL_REQUEST action sets the loading flag to false and sets the error message based on the payload property of the action.

// 3. The GET_USER_LIST action sets the loading flag to false, clears the error message, sets the user list  to the payload property of the action, and sets the user object to an empty object.

// 4. The default case simply returns the current state if no matching action is found.
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errormessage: action.payload,
      };
    case GET_USER_LIST:
      return {
        loading: false,
        errormessage: "",
        userList: action.payload,
        userObject: {},
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userObject:action.payload
      };
    default:
      return state;
  }
};
