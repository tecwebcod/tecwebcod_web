import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteApp from "./services/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer autoClose={2000}></ToastContainer>
        <RouteApp></RouteApp>
      </BrowserRouter>

    </div>
  );
}

export default App;
