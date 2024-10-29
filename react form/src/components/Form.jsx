import React, { useState } from "react";

const Form = () => {
  const [curState, setCurState] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginFormSubmition = (e) => {
    e.preventDefault();
    const user = { username, password };
    console.log(user);
  };

  return (
    <div>
      <form action="" onSubmit={handleLoginFormSubmition}>
        <div className="p-4 rounded-lg border border-gray-600 min-w-96">
          <h1 className="text-center text-4xl mb-7 border-b pb-4 border-gray-800">
            {curState}
          </h1>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-semibold text-lg">
                Username or Email
              </label>
              <input
                type="email"
                className="border p-2 outline-none rounded-md focus-within:border-green-500"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username or email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold text-lg">
                Enter your password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 outline-none rounded-md focus-within:border-green-500"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="my-7 text-center w-full bg-green-500 hover:bg-green-600 duration-300 p-2 rounded-lg text-xl text-gray-100"
          >
            {curState}
          </button>
          <div className="flex items-center text-sm justify-between">
            <p>Don't have an account ?</p>
            <p className="text-blue-700 font-semibold cursor-pointer">
              Create new accoount
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
