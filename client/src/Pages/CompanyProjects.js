import React, { useState, useEffect, useContext } from "react";
import CompanyProjectsList from "../Components/CompanyProjectsList";
import NewProjectButton from "../Components/NewProjectButton";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { ManagerContext } from "../Context/ManagerProvider";

function CompanyProjects() {

    const [ isManager ] = useContext(ManagerContext);
    const [ isUpperManag ] = useContext(UpperManagContext);

    let [ companyProjects, setCompanyProjects ] = useState({});

    useEffect(() => {
        if (user) {
            fetch("/companyprojects")
            .then((r) => r.json())
            .then((companyProjects) => setCompanyProjects(companyProjects))
        }
    },[]);

    return (
        <div>
            {isManager || isUpperManag ? (
                <div>
                    <CompanyProjectsList companyProjects={companyProjects}/>
                    <NewProjectButton/>
                </div>
            ) : (
                (null)
            )}
        </div>
    );
};

export default CompanyProjects;