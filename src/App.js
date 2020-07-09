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

//should be done with localStorage !!
const TOKEN = localStorage.getItem("token");

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(function getUserWhenMounted() {
      async function getUser() {
        console.log(token)
        if(token){
          let payload = jwt.decode(token);
          console.log(payload)
          let userResult = await JoblyApi.getUser(payload.username);
          setCurrentUser(userResult);
        }
        setInfoLoaded(true);
      };
      getUser();
    }, [token]);

  
  async function login(data) {
    let result = await JoblyApi.login(data);
    console.debug("currentuser......", currentUser);
    // localStorage.setItem("token", result.token)
    console.log(token)
    setToken(token);
    setToken(result);
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