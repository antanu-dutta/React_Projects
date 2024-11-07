import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLoginFormSubmition = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form action="" onSubmit={handleLoginFormSubmition}>
        <div className="p-4 rounded-lg border border-gray-600 min-w-96">
          <h1 className="text-center text-4xl mb-7 border-b pb-4 border-gray-800">
            Login
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
                value={user.username}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, username: e.target.value }))
                }
                placeholder="Username or email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold text-lg">
                Enter your password
              </label>
              <input
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
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
            Login
          </button>
          <div className="flex items-center text-sm justify-between">
            <p>Don&apos;t have an account ?</p>
            <Link to={"/signup"}>
              <p className="text-blue-700 font-semibold cursor-pointer">
                Create new accoount
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
