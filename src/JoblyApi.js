import axios from 'axios';
import { TOKEN } from './App';
const BASE_URL = 'http://localhost:3001';

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {
    console.debug("API Call:", endpoint, params, verb);

    const _token = localStorage.getItem(TOKEN);

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
    return res.companies;
  }

  static async getJobs(data) {
    let res = await this.request(`jobs`, {data});
    return res.jobs;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async login(data) {
    let res = await this.request("login", data, "post");
    localStorage.setItem("token", res.token)
    return res.token;
  }

  static async signup(data) {
    let res = await this.request("users", data, "post");
    localStorage.setItem("token", res.token)
    return res.token;
  }

  static async edit(data) {
    let res = await this.request("profile", data, "patch");
    localStorage.setItem("token", res.token)
    return res.token;
  }

  static async apply(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, "post");
    return res.message;
  }

  
}

export default JoblyApi;