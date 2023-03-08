import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import profileImg from "../../../assets/images/profile-img.png";
import auth from "../../../Firebase/firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  return (
    <section className="h-screen">
      <div className="bg-white w-96 mx-auto mt-10 py-8 px-10 rounded-xl">
        <h1 className="text-center text-lg font-bold mb-4">My Profile</h1>
        <hr />
        <div className="flex items-center gap-4 mt-6">
          <div>
            <img
              className="w-24 rounded-full"
              src={user?.photoURL ? user?.photoURL : profileImg}
            />
          </div>
          <div>
            <p className="text-base font-bold mb-1">{user?.displayName}</p>
            <p className="text-base">{user?.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
