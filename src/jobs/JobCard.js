import React from "react";
import { Link } from 'react-router-dom';

function JobCard({id, title, salary, equity, history }) {
    if (!id) {
        history.push("/jobs")
    }

    return (
        <div className="job">
            <p>The job is {title}, it pays {salary}. The equity is {equity}.</p>
            <p><Link to="/jobs">Look at other jobs.</Link></p>
        </div>
    )
}

export default JobCard;