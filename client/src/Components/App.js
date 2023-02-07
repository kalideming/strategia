import React, { Route, Switch } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { UserProvider } from "./Context/UserProvider";
import { Switch } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./Home/HomePage";
import Account from "./Account/Account";
import MyProjects from "./MyProjects/MyProjects";
import ProjectPage from "./ProjectPage/ProjectPage";
import CreateProject from "./CreateProject/CreateProject";


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
