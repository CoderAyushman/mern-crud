import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        setUsers(result.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete=(id:any)=>{
      axios.delete("http://localhost:3000/delete/"+id)
      .then((result)=>{
        console.log(result)
        window.location.reload();
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <div className="flex h-[100vh] bg-gray-500 justify-center items-center">
      <div className="flex-col bg-white rounded-sm p-3  justify-center items-center gap-5">
        <Link to={"/create"} className=" pl-2 pr-2 pt-1 pb-1 bg-pink-600 mr-[100%] mb-5 text-white font-semibold rounded-xl">
          Add +
        </Link>
        <table >
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
              <tr key={i} className="flex-col justify-between text-sm ">
                <td className="text-center p-2">{user.name}</td>
                <td className="text-center p-2">{user.email}</td>
                <td className="text-center p-2">{user.age}</td>
                <td className="text-center p-2">
                  <Link
                    to={`/update/${user._id}`}
                    className="p-1 bg-pink-600 text-white mr-1 rounded-md"
                  >
                    update
                  </Link>

                  <button className=" p-1 bg-green-600 text-white rounded-md" onClick={()=>{handleDelete(user._id)}}>
                    delete
                  </button>
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
