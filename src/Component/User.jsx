import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "../Style/Form.css";

function User() {
  const { user } = useContext(UserContext);

  return <div className="User">Welcome back {user.userName} !</div>;
}

export default User;
