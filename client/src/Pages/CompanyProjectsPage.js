import React, { useState, useEffect } from "react";
import CompanyProjectsList from "../Components/CompanyProjectsList";

function CompanyProjectsPage({ user }) {

    const currentUser = user[0];
    console.log(currentUser)
    const [ isManager, setIsManager ] = useState(false);
    const [ isUpperManagement, setIsUpperManagement ] = useState(false);
    let [ companyProjects, setCompanyProjects ] = useState([]);
    const [ canSeeAllProjs, setCanSeeAllProjs ] = useState

    if (user[0].manager === true) {
        setIsManager(true)
    };

    if (user[0].upper_management === true) {
        setIsUpperManagement(true)
    };

    if (isManager && isUpperManagement) {
        setCanSeeAllProjs(true)
    };

    useEffect(() => {
        fetch("/companyprojects")
        .then((r) => r.json())
        .then((companyProjects) => setCompanyProjects(companyProjects))
    },[]);

    return (
        <div>
            {canSeeAllProjs ? (
                <div>
                    <CompanyProjectsList companyProjects={companyProjects}/>
                </div>
            ) : (
                (null)
            )}
        </div>
    );
};

export default CompanyProjectsPage;