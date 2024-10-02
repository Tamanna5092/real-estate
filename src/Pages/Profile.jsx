import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-210px)]">
      <div className="px-4 md:0">
        <h1 className="roboto text-3xl text-center font-semibold my-4">User Information</h1>
        <h3 className="text-2xl text-[#949494]">User Name: <span className="text-[#ffa920] font-bold">{user.displayName}</span></h3>
        <p className="text-xl text-[#949494] my-2">Email: <span className="text-[#ffa920]">{user.email}</span></p>
        <p className="text-base text-[#949494]">User create time: <span className="text-[#ffa920]">{user.metadata.creationTime}</span></p>
        <p className="text-base text-[#949494] my-2">Last sign in: <span className="text-[#ffa920]">{user.metadata.lastSignInTime}</span></p>
         <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Profile;
