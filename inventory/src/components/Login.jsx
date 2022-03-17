import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Login.css"


const Login = ({}) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data ={
      name: name,
      email: email,
      password: password,
      loggedIn: true,
    }
    dispatch({
      type: "LOGIN",
      payload: data,
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control password"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mb-3 form-check"></div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};



export default Login;
