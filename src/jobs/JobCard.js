import React from "react";
import { Link } from 'react-router-dom';
import JoblyApi from '../JoblyApi';

function JobCard({id, title, salary, equity, history }) {

    async function apply(id) {
        console.log("ID......", id);
        let application = await JoblyApi.apply(id);
        return application;
      }

    return (
        <div className="job">
            <p>The job is {title}, it pays {salary}. The equity is {equity}.</p>
            <p><Link to="/jobs">Look at other jobs.</Link></p>
            <button onClick={() => apply(id)}>Apply!</button>
        </div>
    )
}

export default JobCard;