import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Logout.css"

const Logout = () => {
  const user = useSelector(state=>state.user)
  console.log(user.name);
  const dispatch = useDispatch();
  const history = useHistory()
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch({type:"LOGOUT"});
    history.push("/login")
  };
  

  return (
    <>
      <h1>{user.name}</h1>
      <button className="logout-btn" onClick={(e) => handleLogout(e)}>
        logout
      </button>
    </>
  );
};

export default Logout;
