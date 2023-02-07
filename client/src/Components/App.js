import React, { Route, Switch } from "react";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UserProvider } from "./Context/UserProvider";
import { Switch } from "react-router-dom";


function App() {
  
  return(
    <UserProvider>
      <Switch>
        <Route path="/login">
          <SignIn/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/home">
          <Main/>
        </Route>
      </Switch>
    </UserProvider>
  );
};

export default App;
