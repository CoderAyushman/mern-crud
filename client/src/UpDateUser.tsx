import React from 'react'

const UpDateUser = () => {
  return (
   
   <>
   <div className="flex h-[100vh] bg-gray-500 justify-center items-center">
        <div className="flex-col  justify-center items-center bg-gray-300 p-5">
          <form>
            <h1 className="text-center text-xl font-bold">Update User</h1>
            <label htmlFor="name">Name</label>
            <div>
              <input id="name" type="text" placeholder="Enter Name" />
            </div>
            <label htmlFor="email">Email</label>
            <div>
              <input id="email" type="email" placeholder="Enter Email" />
            </div>
            <label htmlFor="age">Age</label>
            <div>
              <input id="age" type="number" placeholder="Enter Age" />
            </div>
            <button className="bg-green-500 p-1 font-semibold m-1">
              Update
            </button>
          </form>
        </div>
      </div>
   </>
  )
}

export default UpDateUser