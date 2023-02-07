import React, { Route, Switch } from "react";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { UserProvider } from "./Context/UserProvider";
import { Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import Account from "./Pages/Account";
import MyProjects from "./Pages/MyProjects";
import ProjectPage from "./Pages/ProjectPage";
import CreateProject from "./Pages/CreateProject";
import CompanyProjects from "./Pages/CompanyProjects";


function App() {
  
  return(
    <UserProvider>
      <NavBar/>
      <Switch>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/myaccount">
          <Account/>
        </Route>
        <Route path="/myprojects">
          <MyProjects/>
        </Route>
        <Route path="/companyprojects">
          <CompanyProjects/>
        </Route>
        <Route path="/projects/:id">
          <ProjectPage/>
        </Route>
        <Route path="/newproject">
          <CreateProject/>
        </Route>
      </Switch>
    </UserProvider>
  );
};

export default App;
