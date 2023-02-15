import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Context/UserProvider";
import { useHistory } from "react-router-dom";

function NewMemberSearch({ project }) {

    const { user } = useContext(UserContext);
    const [ employees, setEmployees ] = useState([]);
    const [ searchField, setSearchField ] = useState("");
    let [ isPopUpOpen, setIsPopUpOpen ] = useState(false);

    useEffect(() => {
        if(user) {
            fetch(`/companies/${user.company_id}/users`)
            .then((r) => r.json())
            .then((employees) => setEmployees(employees))
        };
    }, []);

    const handleSearchChange = e => {
        setSearchField(e.target.value)
        const filteredEmployees = employees.filter((employee) => {
            employee.first_name.toLowerCase().includes(searchField.toLowerCase()) 
            || employee.last_name.toLowerCase().includes(searchField.toLowerCase())
        });
    };

    return (
        <div>
            <button onClick={() => setIsPopUpOpen(true)}>Find A Member</button>
            { isPopUpOpen ? (
             <input 
                type="text" 
                id="search" 
                placeholder="Type a name to search..."
                onChange={handleSearchChange}
                value={searchField}
            />   
            ) : (
                (null)
            )}
        </div>
    );
    
}

export default NewMemberSearch;