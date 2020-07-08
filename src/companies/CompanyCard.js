import React from "react";
import { Link } from 'react-router-dom';

function CompanyCard({name, handle, description, history }) {
    if (!handle) {
        history.push("/companies")
    }

    return (
        <div className="company">
            <p>The company's named {name}. The company {description}.</p>
    <p><Link to={`/company/${handle}`}>{name}</Link></p>
        </div>
    )
}

export default CompanyCard;