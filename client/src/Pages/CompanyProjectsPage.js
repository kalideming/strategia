import React, { useState, useEffect } from "react";
import CompanyProjectsList from "../Components/CompanyProjectsList";

function CompanyProjectsPage({ user }) {

    const currentUser = user[0];
    let [ companyProjects, setCompanyProjects ] = useState([]);

    useEffect(() => {
        fetch("/companyprojects")
        .then((r) => r.json())
        .then((companyProjects) => setCompanyProjects(companyProjects))
    },[]);

    return (
        <CompanyProjectsList companyProjects={companyProjects}/>
    );
};

export default CompanyProjectsPage;