import React from "react";
import JobCard from "./JobCard"
import { Link } from 'react-router-dom';

function JobList() {
    const [jobs, setJobs] = useState([]);

    const jobLinks = Object.keys(jobs).map(handle => (
       <li key={handle}>
           <Link to={`/jobs/${handle}`}>{handle}</Link>
       </li>
    ));

    return (
        <div className="jobList">
            <header className="jobList-header">
                <h1 className="jobList-title">These are jobs.</h1>
                <h1>
                <Link to="/jobs">Look at jobs.</Link>
                </h1>
            </header>
            <div className="jobList-intro">
                <p>Please select a job.</p>
                <ul>{jobLinks}</ul>
            </div>
        </div>
    )
}

export default JobList;