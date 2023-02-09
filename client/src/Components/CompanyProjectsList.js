import React from "react";
import CompanyProjectCard from "./CompanyProjectCard";

function CompanyProjectsList({ companyProjs }) {

    const mappedProjs = companyProjs.map(oneProj => {
        return <CompanyProjectCard key={oneProj.id} proj={oneProj}/>
    });

    return (
        <ul>
            {mappedProjs}
        </ul>
    );
};

export default CompanyProjectsList;