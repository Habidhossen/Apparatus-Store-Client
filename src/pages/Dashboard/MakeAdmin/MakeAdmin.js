import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UsersRow from "../UsersRow/UsersRow";

const MakeAdmin = () => {
  // using React Query
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Total Members ({users.length})
        </h1>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UsersRow key={user._id} user={user} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
