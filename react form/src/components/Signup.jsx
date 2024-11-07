import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputFields from "./InputFields";

const Signup = () => {
  const [users, setUsers] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignupForm = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword)
      return alert("All fields are required");
    if (password !== confirmPassword)
      return alert("please confirm your password");
    const newUser = {
      fullName,
      email,
      password,
    };

    const isUserAlreadyExists = users.find((curElem) => curElem === newUser);
    console.log(isUserAlreadyExists);
  };
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);
  console.log(users);
  return (
    <div>
      <form action="" onSubmit={handleSignupForm}>
        <div className="p-4 rounded-lg border border-gray-600 min-w-96">
          <h1 className="text-center text-4xl mb-7 border-b pb-4 border-gray-800">
            Sign up
          </h1>
          <div className="flex flex-col gap-7">
            <InputFields
              label={"Full Name"}
              id={"fullname"}
              type={"text"}
              placeholder={"Enter your full name"}
              value={fullName}
              onChangeMethod={(e) => setFullName(e.target.value)}
            />
            <InputFields
              label={"Email"}
              id={"email"}
              type={"email"}
              placeholder={"Enter an email"}
              value={email}
              onChangeMethod={(e) => setEmail(e.target.value)}
            />
            <InputFields
              label={"Password"}
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChangeMethod={(e) => setPassword(e.target.value)}
            />
            <InputFields
              label={"Confirm Password"}
              id={"confirm password"}
              type={"password"}
              placeholder={"Password"}
              value={confirmPassword}
              onChangeMethod={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="my-7 text-center w-full bg-green-500 hover:bg-green-600 duration-300 p-2 rounded-lg text-xl text-gray-100"
          >
            Create account
          </button>
          <div className="flex items-center text-sm justify-between">
            <p>ALready have an account ?</p>
            <Link to={"/login"}>
              <p className="text-blue-700 font-semibold cursor-pointer">
                Login here
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
