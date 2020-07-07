import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignupForm () {
  const [formData, setFormData] = useState({username:'',
                                            password:'',
                                            firstName:'',
                                            lastName:'',
                                            email:''});
  const history = useHistory();

  function handleChange(event) {
    const {name, value } = event.target;
    setFormData (formData => ({
      ...formData,
      [name]: value
    }));
  };
  function handleSubmit(event) {
    event.preventDefault();
    history.push('/companies');
  };

  return (
    <div className={SignupForm}>
      <h1>SIGN UP</h1>
      <form onSubmit="{handleSubmit}">
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
          <label htmlFor="firstName">First Name</label>
          <input 
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
          />
          </div>
          <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
          </div>
          <div>
          <label htmlFor="email">Email</label>

          <input 
            id="email"
            name="email"
            type="email"
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