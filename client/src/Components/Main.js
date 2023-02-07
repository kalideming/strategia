import { Route, Switch } from 'react-router-dom';
import { UserProvider } from './Context/UserProvider';
import NavBar from "./NavBar";
import HomePage from "./Home/HomePage";
import MyProjects from "./MyProjects/MyProjects";
import ProjectPage from "./ProjectPage/ProjectPage";

function Main() {

    return (
        <UserProvider>
            <NavBar>
            
            </NavBar>
        </UserProvider>
    )

}

export default Main;