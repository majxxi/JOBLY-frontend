import React, { useState, useEffect } from "react";
import JobCard from "./JobCard"
import { Link } from 'react-router-dom';
import JoblyApi from '../JoblyApi';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(function getJobListWhenMounted() {
        async function getJobList() {
            let jobListResult = await JoblyApi.getJobs(); //search should be here
            setJobs(jobListResult);

        }
        getJobList();
    }, []);

    

    const jobLinks = jobs.map(job => (
        <div><JobCard
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
        />
        </div>
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