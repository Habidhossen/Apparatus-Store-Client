import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import DeleteBlog from "../DeleteBlog/DeleteBlog";
import ManageBlogsRow from "../ManageBlogsRow/ManageBlogsRow";

const ManageBlogs = () => {
  const [deletingBlog, setDeletingBlog] = useState(null);

  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery("blogs", () =>
    fetch("http://localhost:5000/blog/").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-xl font-bold mb-6">All Blogs ({blogs.length})</h1>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>IMG</th>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <ManageBlogsRow
                key={blog._id}
                blog={blog}
                setDeletingBlog={setDeletingBlog}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Delete Modal */}
      {deletingBlog && (
        <DeleteBlog deletingBlog={deletingBlog} refetch={refetch} />
      )}
    </div>
  );
};

export default ManageBlogs;
