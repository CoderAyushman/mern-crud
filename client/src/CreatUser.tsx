import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreatUser = () => {
  const [name, setName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [age, setAge] = useState<any>();
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", { name, email, age })
      .then((result) => {
        navigate("/");
        console.log(result);
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex h-[100vh] w-[100vw] bg-gray-500 justify-center items-center">
        <div className="flex-col  justify-center items-center bg-gray-300 p-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-center text-xl font-bold">Add User</h1>
            <label htmlFor="name">Name</label>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="age">Age</label>
            <div>
              <input
                id="age"
                type="number"
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button className="bg-green-500 p-1 font-semibold m-1 rounded-lg text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatUser;
