import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignupForm ({signup}) {
  const [formData, setFormData] = useState({username:'',
                                            password:'',
                                            first_name:'',
                                            last_name:'',
                                            email:''});
  const history = useHistory();

  function handleChange(event) {
    const {name, value } = event.target;
    setFormData (formData => ({
      ...formData,
      [name]: value
    }));
  };
  async function handleSubmit(event) {
    event.preventDefault();
    await signup(formData);
    history.push('/companies');
  };

  return (
    <div className="SignupForm">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
          <label htmlFor="username">Username</label>
          <input 
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            value={formData.username}
          />
          </div>
          <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
          />
          </div>
          <div>
          <label htmlFor="first_name">First Name</label>
          <input 
            id="first_name"
            name="first_name"
            type="text"
            onChange={handleChange}
            value={formData.first_name}
          />
          </div>
          <div>
          <label htmlFor="last_name">Last Name</label>
          <input 
            id="last_name"
            name="last_name"
            type="text"
            onChange={handleChange}
            value={formData.last_name}
          />
          </div>
          <div>
          <label htmlFor="email">Email</label>

          <input 
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            value={formData.email}
          />
          </div>
          <div>
           <button type="submit" onSubmit={handleSubmit}>SIGN UP</button>
          </div>


        </div>
      </form>
    </div>
  );
};

export default SignupForm;