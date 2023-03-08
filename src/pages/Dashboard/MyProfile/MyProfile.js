import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  const email = user?.email;

  console.log(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // get data from DB
  const { data, isLoading, refetch } = useQuery("user", () =>
    fetch(`http://localhost:5000/user?email=${email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  // handle submit button
  const onSubmit = (data) => {
    // send data to the server
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Profile updated successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section className="h-screen">
      <div className="bg-white w-96 mx-auto mt-10 py-8 px-10 rounded-xl">
        <h1 className="text-center text-lg font-bold mb-4">My Profile</h1>
        <hr />
        <div className="flex items-center gap-4 mt-6">
          <div>
            <img className="w-24 rounded-full" src={user?.photoURL} />
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
