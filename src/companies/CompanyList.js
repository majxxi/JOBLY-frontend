import React, {useState, useEffect} from "react";
import CompanyCard from "./CompanyCard"
import JoblyApi from '../JoblyApi';
import SearchForm from '../auths/SearchForm';
function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(function getCompanyListWhenMounted() {
      search();
    }, []);

    async function search(term){
        const companyListResult = await JoblyApi.getCompanies(term); //search should be here
        setCompanies(companyListResult);
    }

    const companyLinks = companies.map(company => (
      <CompanyCard 
        name={company.name}
        handle={company.handle}
        description={company.description}
      />
    ));


    return (
        <div className="companyList">
            <SearchForm search={search} />
            <header className="companyList-header">
                <h1 className="companyList-title">These are companies with jobs.</h1>
                <h1>
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