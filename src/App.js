import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import SignupForm from "./auths/SignupForm";
import CompanyList from './companies/CompanyList';


function App() {
  return (
    <div className="App">
      {/* <Routes /> */}
      <BrowserRouter>
      <Route exact path="/companies/:handle">
      <CompanyList />
      </Route>
      <Route exact path="/signup">
      <SignupForm />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;