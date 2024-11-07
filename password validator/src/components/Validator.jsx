import { useEffect, useId, useState } from "react";
import { generateRandomNumber, getRandomArbitrary } from "../helper";

const Validator = () => {
  const passwordId = useId();
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(
    "Enter password including a special character and a length of at least 8"
  );

  const checkIsPasswordStrong = () => {
    const hasSpecialChar = /[!@#$%^&*()]/.test(password); // Check for special character
    const hasNumber = /\d/.test(password); // Check for number
    const isLongEnough = password.length >= 8; // Check for length

    if (!hasSpecialChar) {
      setIsValid("Enter at least one special character");
    } else if (!hasNumber) {
      setIsValid("Enter at least one number");
    } else if (!isLongEnough) {
      setIsValid("Enter at least 8 characters");
    } else {
      setIsValid("Your password is strong");
    }
  };

  const generateNewPassword = () => {
    const smallCharacter = "abcdefghijklmnopqrstuvwxyz";
    const capCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const specialCharacter = "!@#$%^&*()";

    let newPassword = "";
    const passwordLength = getRandomArbitrary(8, 16);

    for (let i = 0; i < passwordLength; i++) {
      const charType = generateRandomNumber(4); // Randomly choose the character type

      switch (charType) {
        case 0:
          newPassword +=
            smallCharacter[generateRandomNumber(smallCharacter.length)];
          break;
        case 1:
          newPassword +=
            capCharacter[generateRandomNumber(capCharacter.length)];
          break;
        case 2:
          newPassword += number[generateRandomNumber(number.length)];
          break;
        case 3:
          newPassword +=
            specialCharacter[generateRandomNumber(specialCharacter.length)];
          break;
        default:
          break;
      }
    }

    setPassword(newPassword);
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    checkIsPasswordStrong();
  }, [password]);

  return (
    <div className="p-4 min-w-96 h-auto rounded shadow-xl bg-[#133E87]">
      <h1 className="text-white text-center text-3xl">
        Welcome to Password Validator
      </h1>
      <div className="flex flex-col gap-3 mt-6">
        <label htmlFor={passwordId} className="text-white text-lg">
          Enter Password
        </label>
        <input
          type="text"
          id={passwordId}
          placeholder="Enter a password"
          className="rounded p-2 outline-none border border-gray-300"
          value={password}
          onChange={handleInputChange}
        />
        <span
          className={`${
            isValid === "Your password is strong"
              ? "text-green-600"
              : "text-red-700"
          } font-semibold`}
        >
          {isValid}
        </span>
        <button
          className="bg-green-500 py-2 px-6 text-white"
          onClick={generateNewPassword}
        >
          Generate Random Password
        </button>
      </div>
    </div>
  );
};

export default Validator;
