import React, {useState, useEffect} from "react";
import CompanyCard from "./CompanyCard"
import { Link } from 'react-router-dom';
import JoblyApi from '../JoblyApi';

function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(function getCompanyListWhenMounted() {
        async function getCompanyList() {
           const companyListResult = await JoblyApi.getCompanies("and");
           setCompanies(companyListResult)
           console.log(companyListResult);
      }
      getCompanyList();
    }, []);

    const companyLinks = companies.map(company => (
      <CompanyCard 
        name={company.name}
        handle={company.handle}
        description={company.description}
      />
    ));


    return (
        <div className="companyList">
            <header className="companyList-header">
                <h1 className="companyList-title">These are companies with jobs.</h1>
                <h1>
                {/* <Link to="/jobs">Look at jobs</Link> */}
                </h1>
            </header>
            <div className="companyList-intro">
                <p>Please select a company.</p>
                <ul>{companyLinks}</ul>
            </div>
        </div>
    )
}

export default CompanyList;