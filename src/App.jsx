import React, { useState } from "react";

const App = () => {
  const [Users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const HandleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    setUsers([...Users, formData]);

    setFormData({
      name: "",
      email: "",
    });
  };

  const deletehandler = (index) => {
    const newUsers = Users.filter((user, i) => {
      return i !== index;
    });

    setUsers(newUsers);
  };

  const getUser = (idx) => {
    setUserIndex(idx);
    setFormData(Users[idx]);
  };

  const UpdateHandler = (e) => {
    e.preventDefault();

    const copyUser = [...Users];

    copyUser[userIndex] = formData;

    setUsers(copyUser);

    setUserIndex(null);

    setFormData({
      name: "",
      email: "",
    });
  };

  console.log(userIndex);

  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10">User CRUD</h1>

      <form className="mt-10">
        <input
          type="text"
          name="name"
          placeholder=" Enter your name"
          value={formData.name}
          onChange={HandleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={HandleInputChange}
        />

        {userIndex === null ? (
          <button onClick={SubmitHandler}>Submit</button>
        ) : (
          <button onClick={UpdateHandler}>Update</button>
        )}
      </form>

      <ul>
        {Users.map((user, index) => (
          <li
            key={index}
            className="bg-red-100 flex items-center gap-12 w-fit p-4 mt-6 mx-auto"
          >
            <div>
              {index + 1}. {user.name} | {user.email}
            </div>
            <div>
              <button
                className="bg-yellow-500 py-1 px-3"
                onClick={() => getUser(index)}
              >
                Edit
              </button>
              <button
                onClick={() => deletehandler(index)}
                className="bg-red-500 py-1 px-3 text-white ms-3"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
