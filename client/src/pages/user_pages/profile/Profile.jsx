// Profile.jsx with no CSS
/*
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () => makeRequest.get("/users/get").then((res) => res.data),
    retry: 1, // Number of retries
  });

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);

  return (
    <div>
      <h1>User Profile</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>An error occurred: {error.message}</div>}
      {userData && (
        <div>
          <p>First Name: {userData.cust_fname}</p>
          <p>Last Name: {userData.cust_lname}</p>
          <p>State: {userData.cust_state}</p>
          <p>City: {userData.cust_city}</p>
          <p>Street: {userData.cust_street}</p>
          <p>Zipcode: {userData.cust_zipcode}</p>
          <p>User Name: {userData.user_name}</p>
        </div>
      )}
      <Link to="/edit_profile" className="button">
        Edit Profile
      </Link>
    </div>
  );
};

export default Profile;
*/

// Profile.jsx with CSS

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import "./profile.scss"; // Import the SCSS file

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () => makeRequest.get("/users/get").then((res) => res.data),
    retry: 1, // Number of retries
  });

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);

  return (
    <div className="profile">
      <h1>My Profile</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div className="error">An error occurred: {error.message}</div>}
      {userData && (
        <div className="userInfo">
          <p>First Name: {userData.cust_fname}</p>
          <p>Last Name: {userData.cust_lname}</p>
          <p>State: {userData.cust_state}</p>
          <p>City: {userData.cust_city}</p>
          <p>Street: {userData.cust_street}</p>
          <p>Zipcode: {userData.cust_zipcode}</p>
          <p>User Name: {userData.user_name}</p>
        </div>
      )}
      <Link to="/edit_profile" className="button">
        Edit Profile
      </Link>
      <Link to="/" className="back_button">
        Back
      </Link>
    </div>
  );
};

export default Profile;
