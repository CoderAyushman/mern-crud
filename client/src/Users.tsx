import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([
    {
      Name: "ayush",
      Email: "ayh@gmail.com",
      Age: 19,
    },
  ]);
  return (
    <div className="flex h-[100vh] bg-gray-500 justify-center items-center">
      <div className=" max-w-50 bg-white rounded-sm p-3  justify-start">
        <Link to={"/create"} className=" p-1 bg-pink-600 mr-[100%] mb-4">
          Add +
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <Link to={"/update"} className="p-2 bg-pink-600 text-white mr-1">
                    update
                  </Link>

                  <button className=" p-2 bg-green-600 text-white">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
