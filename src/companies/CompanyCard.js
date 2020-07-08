import React from "react";
import { Link } from 'react-router-dom';

function CompanyCard({name, handle, description, history }) {
    if (!handle) {
        history.push("/companies")
    }

    return (
        <div className="companies">
          <p>The company's named {name}. The company {description}.</p>
          <p><Link to={`/companies/${handle}`}> See more about this company. </Link></p>
            </div >

}

export default CompanyCard;