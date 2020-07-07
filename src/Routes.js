import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import Homepage from "./Homepage";
 import SignupForm from "./auths/SignupForm";
// import LoginForm from "./LoginForm";
// import ProfileForm from "./ProfileForm";
// import CompanyList from "./companies/CompanyList";
//import JobList from "./JobList";

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/">
          <Homepage />
        </Route> */}
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        {/* <Route exact path="/login">
          <LoginForm />
        </Route> */}
        {/* <Route exact path="/companies">
          <CompanyList />
        </Route> */}
        {/* <Route exact path="/comapnies/:handle">
          <CompanyList />
        </Route>
        <Route exact path="/jobs">
          <JobList />
        </Route>
        <Route exact path="/profile">
          <ProfileForm />
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;