import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";
import { toast } from "react-toastify";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (error) => {
  return {
    type: FAIL_REQUEST,
    payload: error,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};
export const getUserObj = (data) => {
  return {
    type: GET_USER_OBJ,
    payload: data,
  };
};

export const fetchUserList = () => {
  return async (dispatch) => {
    dispatch(makeRequest());
    try {
      const response = await axios.get("http://localhost:8000/user");
      const userList = response.data;
      dispatch(getUserList(userList));
    } catch (error) {
      dispatch(failRequest(error.message));
    }
  };
};

export const deleteOneUser = (id) => {
  return async (dispatch) => {
    dispatch(deleteUser());
    try {
      await axios.delete(`http://localhost:8000/user/${id}`);
      dispatch(fetchUserList());
    } catch (error) {
      dispatch(failRequest(error.message));
    }
  };
};

export const FunctionAddUser = (data) => {
  return async (dispatch) => {
    dispatch(makeRequest());
    try {
      await axios.post("http://localhost:8000/user", data);
      dispatch(addUser());
      toast.success("User Added successfully.");
    } catch (error) {
      dispatch(failRequest(error.message));
    }
  };
};

export const FunctionUpdateUser = (data, id) => {
  return async (dispatch) => {
    dispatch(makeRequest());
    try {
      await axios.put(`http://localhost:8000/user/${id}`, data);
      dispatch(updateUser());
      toast.success("User Updated successfully.");
    } catch (error) {
      dispatch(failRequest(error.message));
    }
  };
};

export const FetchUserObj = (id) => {
  return async (dispatch) => {
    dispatch(makeRequest());
    try {
      const response = await axios.get("http://localhost:8000/user/" + id);
      const userlist = response.data;
      dispatch(getUserObj(userlist));
    } catch (error) {
      dispatch(failRequest(error.message));
    }
  };
};
