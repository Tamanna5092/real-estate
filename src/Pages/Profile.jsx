import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <h1 className="text-3xl text-center">User Information</h1>
        <h3>User Name: {user.name}</h3>
        <h3>User Email: {user.email}</h3>
        <h3>
          User Photo: <img src={user.photoURL} alt="" />
        </h3>
      </div>
    </div>
  );
};

export default Profile;
