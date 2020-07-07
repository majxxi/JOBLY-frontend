import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import SignupForm from "./auths/SignupForm";


function App() {
  return (
    <div className="App">
      <Routes />
      <SignupForm />
    </div>
  );
}

export default App;