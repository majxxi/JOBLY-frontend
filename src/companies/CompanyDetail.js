import React, {useState, useEffect} from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import JobCard from '../jobs/JobCard';
import JoblyApi from '../JoblyApi';

function CompanyDetail() {
    const {handle} = useParams();
    const [jobs, setJobs] = useState([]);
    const [company, setCompany] = useState({handle});

    // console.log('name', name, 'handle', handle, 'jobs', jobs)
    
    
    useEffect(function getCompanyWhenMounted() {
      async function getCompany() {
        const companyListResult = await JoblyApi.getCompany(handle);
        setCompany(companyListResult)
      }
      getCompany();
    },[handle]);

    useEffect(function getJobsWhenMounted() {
      async function getJobs() {
        let jobList = await JoblyApi.getJobs(handle);
        let matches = jobList.filter(function(job) {
          return job.company_handle === handle;
        })
        setJobs(matches)
      }
      getJobs();
    },[])
    
    if (!handle) {
        return <Redirect to="/companies"/>
    }

    const jobLinks = jobs.map(job => (
      <div>
      <JobCard
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
      />
      </div>
  ));

     return (
         <div>
         <div className="jobList">
            <header className="jobList-header">
                <h1 className="jobList-title">These are jobs.</h1>
                <h1>
                <Link to="/jobs">Look at jobs.</Link>
                </h1>
            </header>
        </div>
         <div className="jobList-intro">
             <p>Please select a job.</p>
             <ul>{jobLinks}</ul>
         </div>
         </div>

     )
    }

export default CompanyDetail;