import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserListing from "./Components/UserListing";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/user"}>User</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/user" element={<UserListing></UserListing>} />
          <Route path="/user/add" element={<AddUser></AddUser>} />
          <Route path="/user/edit/:id" element={<UpdateUser></UpdateUser>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
