import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({username:'',
                                            password:'',
                                            firstName:''
  });
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
    <div className="LoginForm">
      <h1>LOG IN</h1>
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
        </div>
      </form>
    </div>
  );
};

export default LoginForm;