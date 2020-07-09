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
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTQxNDcyNTB9.0ox0D7fo3bssdOhwmfYXxqN_Wuiys8t80hcK4fpTfYA"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] =useState(TOKEN);

  useEffect(function getUserWhenMounted() {
    async function getUser() {
      let { username } = jwt.decode(TOKEN);
      let userResult = await JoblyApi.getUser(username);
      setCurrentUser(userResult);
    };
    getUser();
  }, [token]);

  async function login(data) {
    let result = await JoblyApi.login(data);
    setToken(token);
    return result;
  } //update localstorage too



  return (
    <BrowserRouter>
      <UserContext.Provider value={ currentUser }>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login}/>
          </Route>

          <Route exact path="/signup">
            <SignupForm />
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

export default App;