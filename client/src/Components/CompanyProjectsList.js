import React from "react";
import CompanyProjectCard from "./CompanyProjectCard";

function CompanyProjectsList({ companyProjects }) {

    const mappedProjects = companyProjects.map(oneProj => {
        return <CompanyProjectCard key={oneProj.id} proj={oneProj}/>
    });

    return (
        <ul>
            {mappedProjects}
        </ul>
    );
};

export default CompanyProjectsList;