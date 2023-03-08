import React from "react";

const ManageBlogsRow = ({ blog, setDeletingBlog, refetch }) => {
  const { title, img, date } = blog;

  return (
    <tr className="hover">
      <th>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </th>
      <td>{title}</td>
      <td>{date}</td>
      <td>
        <label
          onClick={() => setDeletingBlog(blog)}
          htmlFor="blog-delete"
          className="btn btn-xs btn-error capitalize text-white ml-2"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageBlogsRow;
