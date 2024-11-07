import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Form = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Form;
