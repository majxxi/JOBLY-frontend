
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./companies/CompanyList";
import JobList from "./jobs/JobList";
import CompanyDetail from "./companies/CompanyDetail";
import LoginForm from "./auths/LoginForm";
import EditForm from "./auths/ProfileForm";
import SignupForm from './auths/SignupForm';


function Routes({login, signup}) {


  return (
    <div>
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>

        <Route exact path="/companies" >
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
  );
}

export default Routes;