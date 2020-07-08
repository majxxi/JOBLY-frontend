import React from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {
    console.debug("API Call:", endpoint, params, verb);

    const _token = (
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTQxNDcyNTB9.0ox0D7fo3bssdOhwmfYXxqN_Wuiys8t80hcK4fpTfYA"
    );

    const data = (verb === "get")
      ? { params: { _token, ...params } } // GET
      : { _token, ...params };            // POST, PATCH

    const req = await axios[verb](`${BASE_URL}/${endpoint}`, data);

    try {
      return (await req).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Indiv API routes

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(data){
    let res = await this.request(`companies`, {data});
    console.log(data);
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request(`/jobs`);
    return res.jobs;
  }

  static async login(data) {
    let res = await this.request("/login", data, "post");
    return res._token;
  }

  static async signup(data) {
    let res = await this.request("/signup", data, "post");
    return res._token;
  }

  static async edit(data) {
    let res = await this.request("/profile", data, "patch");
    return res._token;
}

export default JoblyApi;