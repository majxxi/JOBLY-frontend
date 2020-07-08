import React, {useState} from "react";
import { Link } from 'react-router-dom';

function CompanyDetail({name, handle, description, history }) {

    const [jobs, setJobs] = useState([]);

    if (!handle) {
        history.push("/companies")
    }

    const jobLinks = Object.keys(jobs).map(handle => (
        <li key={handle}>
            <Link to={`/jobs/${handle}`}>{handle}</Link>
        </li>
     ));

     return (
         <div className="companyDetail">
             <p>The company's named {name}. The company {description}.</p>
             <p><Link to="/companies/">Look at other companies</Link></p>
         </div>
        //  <div className="jobList">
        //     <header className="jobList-header">
        //         <h1 className="jobList-title">These are jobs.</h1>
        //         <h1>
        //         <Link to="/jobs">Look at jobs.</Link>
        //         </h1>
        //     </header>
        // </div>
        //  <div className="jobList-intro">
        //      <p>Please select a job.</p>
        //      <ul>{jobLinks}</ul>
        //  </div>

     )
    }

export default CompanyDetail;