import React from "react";
import CompanyProjectCard from "./CompanyProjectCard";

function CompanyProjectsList({ companyProjects, currentUser }) {

    const mappedProjects = companyProjects.map(oneProj => {
        return <CompanyProjectCard key={oneProj.id} proj={oneProj}/>
    });

    return (
        <div className="container">
            <div className="company-project-box">
                <h1 className="company-project-header">{currentUser.company.name} Projects:</h1>
            </div>
            <div className="my-role-cards">
                {mappedProjects}
            </div>
        </div>
    );
};

export default CompanyProjectsList;