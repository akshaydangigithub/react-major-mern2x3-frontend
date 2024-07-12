import React, { useState } from "react";

const App = () => {
  // const [users, setUsers] = useState([]);

  // const newuser = {
  //   name: "Akshay dangi",
  //   age: 22,
  // };

  // const AddUser = () => {
  //   setUsers([...users, newuser]);
  // };

  // console.log(users);
  // const deleteUser = (index) => {
  //   const newUsers = users.filter((user, i) => {
  //     return i !== index;
  //   });

  //   setUsers(newUsers);
  // };

  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-10">Users</h1>

      {/* <button
        onClick={AddUser}
        className="py-1 px-3 bg-green-600 mx-auto block mt-10"
      >
        Add User
      </button> */}

      <div className="border-2 w-fit p-10 border-black m-10">
        <div className="h-16 w-96 bg-red-200 mx-auto flex items-center justify-between px-3">
          <h1>
            1. <b>Akshay</b> | 22y
          </h1>
          <button className="py-1 px-3 bg-green-600 text-white">Add boy</button>
        </div>
        <div className="h-16 w-96 bg-red-200 mt-10 mx-auto flex items-center justify-between px-3">
          <h1>
            2. <b>koi ladki</b> |20y
          </h1>
          <button className="py-1 px-3 bg-green-600 text-white">
            Add girl
          </button>
        </div>
      </div>

      {/* {users.map((user, index) => (
        <div className="h-16 w-96 bg-red-200 mt-10 mx-auto flex items-center justify-between px-3">
          <h1>
            {index + 1}. <b>{user.name}</b> | {user.age}y
          </h1>
          <button
            className="py-1 px-3 bg-red-600 text-white"
            onClick={() => deleteUser(index)}
          >
            Delete
          </button>
        </div>
      ))} */}
    </>
  );
};

export default App;
