import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const UpDateUser = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  
  const [name, setName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [age, setAge] = useState<any>();
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers/"+id)
      .then((result) => {
       setName(result.data.name)
       setEmail(result.data.email)
       setAge(result.data.age)
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/update/"+id,{name:name,email:email,age:age})
    .then((result)=>{console.log(result)
      navigate('/')
    })
    .catch((err)=>console.log(err))
  }
  return (
   
   <>
   <div className="flex h-[100vh] bg-gray-500 justify-center items-center">
        <div className="flex-col  justify-center items-center bg-gray-300 p-5">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <h1 className="text-center text-xl font-bold">Update User</h1>
            <label htmlFor="name">Name</label>
            <div>
              <input id="name" type="text" placeholder="Enter Name" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <label htmlFor="email">Email</label>
            <div>
              <input id="email" type="email" placeholder="Enter Email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <label htmlFor="age">Age</label>
            <div>
              <input id="age" type="number" placeholder="Enter Age" defaultValue={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button className="bg-green-500 p-1 font-semibold m-1 rounded-lg text-white">
              Update
            </button>
          </form>
        </div>
      </div>
   </>
  )
}

export default UpDateUser

// function setUsers(data: any) {
//   throw new Error('Function not implemented.');
// }
