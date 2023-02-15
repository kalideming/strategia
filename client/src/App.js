import React from "react";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import { UserProvider } from "./Context/UserProvider";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import MyProjectsPage from "./Pages/MyProjectsPage";
import ProjectPage from "./Pages/ProjectPage";
import CompanyProjectsPage from "./Pages/CompanyProjectsPage";
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
                <Route path="/">
                  <LogInPage/>
                </Route>
                <Route path="/signup">
                  <SignUpPage/>
                </Route>
                <Route path="/home">
                  <HomePage/>
                </Route>
                <Route path="/myaccount">
                  <AccountPage/>
                </Route>
                <Route path="/myprojects">
                  <MyProjectsPage/>
                </Route>
                <Route path="/companyprojects">
                  <CompanyProjectsPage/>
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
