import React, { useState, useEffect, useContext } from "react";
import CompanyProjectsList from "../Components/CompanyProjectsList";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { ManagerContext } from "../Context/ManagerProvider";

function CompanyProjectsPage() {

    const [ isManager ] = useContext(ManagerContext);
    const [ isUpperManag ] = useContext(UpperManagContext);

    let [ companyProjects, setCompanyProjects ] = useState({});

    useEffect(() => {
        fetch("/companyprojects")
        .then((r) => r.json())
        .then((companyProjects) => setCompanyProjects(companyProjects))
    },[]);

    return (
        <div>
            {isManager || isUpperManag ? (
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