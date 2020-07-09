import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./companies/CompanyList";
import JobList from "./jobs/JobList";
import CompanyDetail from "./companies/CompanyDetail";
import LoginForm from "./auths/LoginForm";
import EditForm from "./auths/ProfileForm";
import SignupForm from './auths/SignupForm';
import UserContext from './UserContext';
import JoblyApi from './JoblyApi';
import jwt from "jsonwebtoken";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

//should be done with localStorage !!
const TOKEN = localStorage.getItem("token");

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(function getUserWhenMounted() {
    async function getUser() {
      let payload = jwt.decode(TOKEN);
      console.log(payload)
      let userResult = await JoblyApi.getUser(payload.username);
      setCurrentUser(userResult);
    };
    getUser();
  }, [token]);
  
  async function login(data) {
    let result = await JoblyApi.login(data);
<<<<<<< HEAD
    console.debug("currentuser......", currentUser);
    // localStorage.setItem("token", result.token)
=======
<<<<<<< HEAD
    console.log(token)
    setToken(token);
=======
>>>>>>> 19710d4bca5bc2b656111027b24c2cad0a8fbf21
    setToken(result);
>>>>>>> 564da461e3617ccf95586f09b9427b7bfa9c8c79
    return result;
  } //update localstorage too

  async function signup(data) {
    let result = await JoblyApi.signup(data);
    setToken(result);
    return result;
  }



  return (
    <BrowserRouter>
      <UserContext.Provider value={ currentUser, setCurrentUser }>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login}/>
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup}/>
          </Route>

          <Route exact path="/companies"  >
            <CompanyList />
          </Route>

          <Route exact path="/jobs" >
            <JobList />
          </Route>

          <Route exact path="/companies/:handle" >
            <CompanyDetail />
          </Route>

          <Route path="/profile">
            <EditForm />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export {App, TOKEN};