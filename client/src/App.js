import React from "react";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { UserProvider } from "./Context/UserProvider";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import MyProjects from "./Pages/MyProjects";
import ProjectPage from "./Pages/ProjectPage";
import CreateProject from "./Pages/CreateProject";
import CompanyProjects from "./Pages/CompanyProjects";
import { ManagerProvider } from "./Context/ManagerProvider";
import { UpperManagProvider } from "./Context/UpperManagProvider";
import { ProjectHeadProvider } from "./Context/ProjectHeadProvider";
import { ProjectProvider } from "./Context/ProjectProvider";


function App() {

  return(
    <UserProvider>
      <ManagerProvider>
        <UpperManagProvider>
          <ProjectHeadProvider>
            <ProjectProvider>
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
                  <AccountPage/>
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
              </Switch>
            </ProjectProvider>
          </ProjectHeadProvider>
        </UpperManagProvider>
      </ManagerProvider>
    </UserProvider>
  );
};

export default App;
