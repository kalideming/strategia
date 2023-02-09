import React, { useState, useEffect } from "react";
import CompanyProjectsList from "../Components/CompanyProjectsList";
import CreateProjectButton from "../Components/CreateProjectButton";

function CompanyProjects() {

    let [companyProjs, setCompanyProjs] = useState([]);

    useEffect(() => {
        fetch("/companyprojects")
        .then((r) => r.json())
        .then((companyProjs) => setCompanyProjs(companyProjs))
    }, []);

    return (
        <div>
            <CompanyProjectsList companyProjs={companyProjs}/>
            <CreateProjectButton/>
        </div>
    );
};

export default CompanyProjects;