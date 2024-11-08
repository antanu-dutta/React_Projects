import { useId, useRef, useState } from "react";
import name from "@rstacruz/startup-name-generator";

export const DomainFinder = () => {
  const [domainName, setDomainName] = useState([]);
  const inputValue = useRef();
  const domainInput = useId();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (inputValue.current.value) {
      const generatedName = name(inputValue.current.value);
      setDomainName(generatedName);
      inputValue.current.value = "";
    } else {
      alert("Please enter something in input");
    }
  };

  return (
    <div className="bg-white p-4 rounded min-h-96 w-96 text-center">
      <h1 className="text-2xl mb-6">Welcomet to Domain Finder Website</h1>
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor={domainInput} className="text-lg font-bold">
            Domain Name
          </label>
          <input
            type="text"
            id={domainInput}
            ref={inputValue}
            placeholder="Enter a domain name "
            className="p-2 outline-none border border-gray-800 w-full"
          />
          <button
            type="submit"
            className="bg-green-500 py-2 px-5 text-white mt-5"
          >
            Get Domain Name
          </button>
        </div>
      </form>
      <div className="mt-10 flex flex-wrap gap-3">
        {domainName.slice(0, 10).map((curElem, index) => {
          return (
            <button
              key={index}
              className="bg-slate-400 text-white py-1 px-3 rounded-2xl"
            >
              {curElem}
            </button>
          );
        })}
      </div>
    </div>
  );
};
